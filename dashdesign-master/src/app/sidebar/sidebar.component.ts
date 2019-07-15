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

  showModal() {
      this.showIt = true;
  }
  hideModal(newName: string) {
      this.showIt = false;
  }



}
