import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list';
import { AddNoteComponent } from './add-note/add-note';
import { NoteDetail } from './note-detail/note-detail';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetail},
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
