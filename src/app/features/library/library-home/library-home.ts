import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  DestroyRef,
  computed,
} from '@angular/core';
import { Headbar } from '../../headbar/headbar';
import { Library, Book } from '../../../interfaces/interfaces';
import { BookComponent } from '../book-component/book-component';
import { AddBookComponent } from '../add-book-component/add-book-component';
import { AddLibrary } from '../add-library/add-library/add-library';
import { MatDialog } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';
import { API_URL } from '../../../token';

@Component({
  selector: 'app-library-home',
  imports: [Headbar, BookComponent, AddBookComponent],
  templateUrl: './library-home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './library-home.scss',
})
export class LibraryHome {
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  private readonly url = inject(API_URL);

  readonly librariesResource = httpResource<Library[]>(() => `${this.url}/api/libraries`);

  readonly libraries = computed(() => this.librariesResource.value() ?? []);
  readonly isLoading = computed(() => this.librariesResource.isLoading());
  readonly error = computed(() => this.librariesResource.error() !== undefined);

  readonly library = signal<Library | null>(null);
  readonly books = signal<Book[]>([]);

  constructor() {}

  protected toAddComponent() {
    const dialogRef = this.dialog.open(AddLibrary);

    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
