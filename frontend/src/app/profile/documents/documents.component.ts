import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {DocumentModel} from '../../models/document.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.sass']
})
export class DocumentsComponent implements OnInit {

  documents: [DocumentModel];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.getDocumentsList();
  }

  getDocumentsList() {
    this.profileService.getProfileDocuments().subscribe((data: [DocumentModel]) => {
      this.documents = data;
    });
  }

  deleteDocumentItem(id) {
    this.profileService.deleteProfileDocument(id).subscribe(() => {
      const index = this.documents.findIndex(x => x.id === id);
      this.documents.splice(index, 1);
    });
  }


}
