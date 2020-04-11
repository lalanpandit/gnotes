import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  noteForm: FormGroup;
  submitted = false;
  noteList: any[] = [];
  isAddNote = false;
  isUpdate = false;
  selectedIndex: number;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  get f() { return this.noteForm.controls; }

  saveNote = () => {
    this.submitted = true;

    // stop here if form is invalid
    if (this.noteForm.invalid) {
      return;
    }

    this.noteList.push(this.noteForm.value);
    this.noteForm.reset();
    this.submitted = false;
  }

  // Edit note
  editNote = (note: any, index: number) => {
    this.isUpdate = true;
    this.selectedIndex = index;
    this.noteForm.patchValue(note);
  }

  // Update Note
  updateNote = () => {
    this.submitted = true;

    // stop here if form is invalid
    if (this.noteForm.invalid) {
      return;
    }
    this.noteList[this.selectedIndex] = this.noteForm.value;
    this.noteForm.reset();
    this.submitted = false;
    this.isUpdate = false;
  }

  // Delete single Note
  deleteNote = (index: number) => {
    this.noteList.splice(index, 1);
  }

  doLogout = () => {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/'])
  }

}
