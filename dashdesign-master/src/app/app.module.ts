import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarDirective } from './sidebar.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { ModalComponent } from './modal/modal.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TagsComponent } from './tags/tags.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {ChartsModule} from  'ng2-charts';
import { from } from 'rxjs';
@NgModule({
  imports:      [ BrowserModule, FormsModule , ChartsModule],
  declarations: [ AppComponent,  SidebarDirective, NavbarComponent, SidebarComponent, ContainerComponent, ModalComponent, CheckboxComponent, TagsComponent, DatepickerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
