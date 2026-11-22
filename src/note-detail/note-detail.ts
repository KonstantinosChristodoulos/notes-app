import { Component, inject } from '@angular/core';
import { NOTES } from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css',
  imports: [RouterModule],
})
export class NoteDetail {
  activeRoute = inject(ActivatedRoute);
  router = inject(Router); 

  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  
  deleteNote() {
    if (this.note) {
      let index = NOTES.indexOf(this.note, 0);
      NOTES.splice(index, 1);
      this.router.navigate(['/']);
    }
  }
}
