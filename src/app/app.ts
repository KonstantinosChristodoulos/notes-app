import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { NotesListComponent } from '../notes-list/notes-list';
import { AddNoteComponent } from '../add-note/add-note';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [
    HeaderComponent,
    NotesListComponent,
    AddNoteComponent,
    RouterModule,
  ],
})
export class AppComponent {}
