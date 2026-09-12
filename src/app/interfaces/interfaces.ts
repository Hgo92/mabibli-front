export interface Library {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface Book {
  id: number;
  libraryId: number;
  openLibraryId: string | null;
  isbn: string | null;
  title: string;
  author: string;
  status: 'A_LIRE' | 'EN_COURS' | 'LU';
  readingDate: string | null;
  description: string | null;
  cover: string | null;
  pages: number | null;
  seriesId: number | null;
  seriesTitle: string | null;
  seriesIndex: number | null;
  categories: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}

export interface List<T> {}
