import { Component, OnInit, HostBinding } from '@angular/core';
import $ from 'jquery'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  showIt = false;
  @HostBinding('class') classes = 'col col-xl-2 col-lg-3';
  modalTitle="Search"
  modalData=[];
  modalData1=[{
    "group":"A",
    "data":["Antofhills","Airoli","Andheri"]
  }];

  modalData2=[{
    "group":"Companies",
    "data":["Google","Facebook","Microsoft"]
  }];
  ngOnInit() {


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

  }

  showModal(flag) {
    this.modalData=flag?this.modalData1:this.modalData2;
    this.showIt = true;
  }
//   showModal1() {
//     this.showIt1= true;
// }
  hideModal(newName: string) {
      this.showIt = false;
  }



}
