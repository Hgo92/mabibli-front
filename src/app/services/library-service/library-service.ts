import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { API_URL } from '../../token';
import { Page, Book, Library } from '../../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);

  getAllLibraries() {
    return this.http.get<Library[]>(`${this.apiUrl}/api/libraries`);
  }

  getLibraryWithBooks(libraryId: number, page = 0) {
    const params = new HttpParams().set('page', page).set('size', 20).set('sort', 'title, asc');

    return forkJoin({
      library: this.http.get<Library>(`${this.apiUrl}/api/libraries/${libraryId}`),
      booksPage: this.http.get<Page<Book>>(`${this.apiUrl}/api/libraries/${libraryId}/books`, {
        params,
      }),
    });
  }

  addLibrary(title: string) {
    return this.http.post(`${this.apiUrl}/api/libraries`, { title });
  }
}
