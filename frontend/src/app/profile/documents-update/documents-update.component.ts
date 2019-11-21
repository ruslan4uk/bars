import {Component, OnInit} from '@angular/core';
import {DocumentModel} from '../../models/document.model';
import {ProfileService} from '../profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-documents-update',
  templateUrl: './documents-update.component.html',
  styleUrls: ['./documents-update.component.sass']
})
export class DocumentsUpdateComponent implements OnInit {

  pageId: number;
  form: DocumentModel = {
    name: '',
    number: 0,
    note: '',
    created_at: '',
  };
  message: string;

  constructor(
    private profileService: ProfileService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe(({id}) => {
      this.pageId = id;
    });

    this.getDocument();
  }

  getDocument() {
    this.profileService.getProfileDocument(this.pageId).subscribe((data: DocumentModel) => {
      const datePipe = new DatePipe('en-US');
      data.created_at = datePipe.transform(data.created_at, 'yyyy-LL-dd');
      this.form = data;
      console.log(data)
    });
  }

  saveDocument() {
    if (this.form.name && this.form.number && this.form.created_at) {
      this.profileService.updateProfileDocument(this.pageId, this.form).subscribe(() => {
        this.message = 'Успешно сохранено';
      }, () => {
        this.message = 'Ошибка';
      });
      return;
    }
    this.message = 'Необходимо заполнить все поля со звездочкой';
  }

}
