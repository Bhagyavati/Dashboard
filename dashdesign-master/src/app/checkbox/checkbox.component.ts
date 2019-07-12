import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() checkboxId:string = "";
  @Input() checkboxName:string = "";
  @Input() checkboxLabel:string = "";
  @Input() checkboxValue:string = "";

  // newCheckboxId:string = "q1"
  // newCheckboxName:string = "myc"
  // newCheckboxLabel:string = "checkit"
  // newCheckboxValue:string = "q1"

  constructor() {
    console.log("sdf");
    // this.newCheckboxId = this.checkboxId
    // this.newCheckboxName = this.checkboxName
    // this.newCheckboxLabel = this.checkboxLabel
    // this.newCheckboxValue = this.checkboxValue
  }

  ngOnInit() {
  }

}
