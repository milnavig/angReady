import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-form-panel',
  templateUrl: './info-form-panel.component.html',
  styleUrls: ['./info-form-panel.component.scss']
})
export class InfoFormPanelComponent implements OnInit {
  hideEl : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  previous() {

  }

  next() {
    
  }

  hide(hideElement: any) {
    this.hideEl = hideElement;
  }

  delClosable(delHide : any) {
    this.hideEl = delHide;
  }
}
