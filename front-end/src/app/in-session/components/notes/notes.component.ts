import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { Adventure } from 'src/app/shared/models/adventure';
import { TokenStorageService } from 'src/app/token-storage.service';
import { NotesService } from '../../services/notes.service';
import { Note } from './note';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  @Input() adventure: Adventure;
  @ViewChild('notesContainer', { static: false }) notesContainer: ElementRef;
  notes: Note[];
  userId: number;
  isNotesForm: boolean = false;
  isEditorDisabled: boolean = false;
  activeNote: Note | null = null;
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image']                         // link and image, video
    ]
  };

  constructor(
    private tokenService: TokenStorageService,
    private notesService: NotesService,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.userId = this.tokenService.getLoggedUser().id;
    this.userId = 2;
    this.notesService.findByUserId(this.userId).subscribe(response => {
      this.notes = response;
    })
  }

  hideNotes() {
    this.notesContainer.nativeElement.classList.remove('notes--open');
  }

  toggleNote() {
    this.isEditorDisabled = false;
    this.activeNote = {
      title: '',
      content: '',
      userId: this.userId
    };
    this.isNotesForm = !this.isNotesForm;
  }

  viewNote(note: Note) {
    this.isEditorDisabled = true;
    this.activeNote = note;
    this.isNotesForm = true;
  }

  editNote(note: Note) {
    this.isEditorDisabled = false;
    this.activeNote = note;
    this.isNotesForm = true;
  }

  saveNote() {
    let note = this.activeNote as Note;
    this.loadingService.startLocalLoading('.notes');
    this.notesService.saveNote(note).subscribe(response => {
      this.alertService.success('Anotação salva com sucesso!');
      this.loadingService.stopLocalLoading('.notes');
    }, err => {
      this.alertService.error('Erro ao salvar anotação!');
      this.loadingService.stopLocalLoading('.notes');
    })
  }

  deleteNote(noteId: number) {
    this.loadingService.startLocalLoading('.notes');
    this.notesService.removeNote(noteId).subscribe(() => {
      this.alertService.success('Anotação deletada com sucesso!');
      this.loadingService.stopLocalLoading('.notes');
    }, err => {
      this.alertService.error('Erro ao deletar anotação!');
      this.loadingService.stopLocalLoading('.notes');
    })
  }
}
