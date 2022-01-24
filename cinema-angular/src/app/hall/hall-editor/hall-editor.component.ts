import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hall } from 'src/Models/Hall';

@Component({
  selector: 'app-hall-editor',
  templateUrl: './hall-editor.component.html',
  styleUrls: ['./hall-editor.component.scss'],
})
export class HallEditorComponent implements OnInit {
  @Input() hall?: Hall;
  @Output() hallChange: EventEmitter<Hall> = new EventEmitter();
  @Output() exec: EventEmitter<Hall> = new EventEmitter();

  hallModel!: Hall;
  constructor() {}

  ngOnInit(): void {
    if (this.hall) this.hallModel = this.hall;
    else {
      this.hallModel = new Hall();
      this.hallChange.emit(this.hall);
    }
  }
  onSubmit(event: SubmitEvent, form: NgForm) {
    event.preventDefault();
    console.log(event, form.valid);
    if (form.valid && this.hallModel.Capacity > 0 && this.hallModel.Number > 0)
      this.exec.emit(this.hallModel);
  }
}
