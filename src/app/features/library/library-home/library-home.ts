import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Headbar } from '../../headbar/headbar';

@Component({
  selector: 'app-library-home',
  imports: [Headbar],
  templateUrl: './library-home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './library-home.scss',
})
export class LibraryHome {}
