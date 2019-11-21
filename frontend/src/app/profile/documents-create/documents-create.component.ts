import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {Router} from '@angular/router';
import {DocumentModel} from '../../models/document.model';

@Component({
  selector: 'app-documents-create',
  templateUrl: './documents-create.component.html',
  styleUrls: ['./documents-create.component.sass']
})
export class DocumentsCreateComponent implements OnInit {

  message: string;
  form: DocumentModel = {
    number: null,
    name: '',
    note: '',
    created_at: '',
  };

  constructor(
    private profileService: ProfileService
  ) {
  }

  ngOnInit() {
  }

  saveDocument() {
    if (this.form.name && this.form.number && this.form.created_at) {
      this.profileService.createProfileDocument(this.form).subscribe(() => {
        this.message = 'Успешно сохранено';
      }, () => {
        this.message = 'Ошибка';
      });
      return;
    }
    this.message = 'Необходимо заполнить все поля со звездочкой';
  }

}
