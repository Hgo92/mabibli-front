import { Component, inject, signal } from '@angular/core';
import { LibraryService } from '../../../../services/library-service/library-service';
import { required, form, minLength, maxLength, FormField, FormRoot } from '@angular/forms/signals';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  imports: [MatDialogModule, FormField, FormRoot],
  selector: 'app-add-library',
  styleUrl: './add-library.scss',
  templateUrl: './add-library.html',
})
export class AddLibrary {
  private libraryService = inject(LibraryService);
  private readonly dialogRef = inject(MatDialogRef<AddLibrary>);

  addModel = signal({ title: '' });

  addForm = form(
    this.addModel,
    (schemaPath) => {
      required(schemaPath.title, { message: 'Un nom est nécessaire' });
      minLength(schemaPath.title, 4, {
        message: 'Au moins quatre caractères pour le nom de votre bibliothèque',
      });
      maxLength(schemaPath.title, 255, {
        message: 'Pas plus de 255 caractères pour le nom de votre bibliothèque',
      });
    },
    {
      submission: {
        action: async () => {
          const formValue = this.addModel();
          this.libraryService.addLibrary(formValue.title).subscribe({
            error: (err) => {
              console.error(err);
            },
          });
        },
      },
    },
  );

  cancel() {
    this.dialogRef.close(true);
  }
}
