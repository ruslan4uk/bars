import {Component, OnInit} from '@angular/core';
import {DocumentModel} from '../models/document.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  documents: [DocumentModel];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllDocuments();
  }

  getAllDocuments() {
    this.http.get('http://localhost:3000/document').subscribe((data: [DocumentModel]) => {
      this.documents = data;
    });
  }

}
