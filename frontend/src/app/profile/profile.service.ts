import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DocumentModel} from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl: any = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getProfileDocuments() {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  getProfileDocument(id) {
    return this.http.get(`${this.apiUrl}/profile/${id}`);
  }

  createProfileDocument(form: DocumentModel) {
    return this.http.post(`${this.apiUrl}/profile`, form);
  }

  updateProfileDocument(id: number, form: DocumentModel) {
    return this.http.post(`${this.apiUrl}/profile/${id}`, form);
  }

  deleteProfileDocument(id: number) {
    return this.http.delete(`${this.apiUrl}/profile/${id}`);
  }

}
