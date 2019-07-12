import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Output() close = new EventEmitter<string>();

  @Input() modalTitle:string = "";

  checkboxData = "Andheri" ;
  checkboxData1 = "Aundh" ;
  checkboxData2 = "Banglore" ;
  checkboxData3 = "Bellendur" ;
  checkboxData4 = "Bhanshankari" ;


  ngOnInit() {
  }

  showModal() {
        this.close.emit();
  }

  hideModal() {
      this.close.emit();
  }

}
