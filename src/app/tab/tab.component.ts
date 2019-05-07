import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit{
  @Input() tabTitle;
  selected: boolean = false;
  @Output() hide = new EventEmitter();

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

  ngOnInit() {
  }

  close(hideElement: any) {
    //this.selected = !this.selected;

    this.hide.emit(hideElement);
    //console.log('Done!');
  }
}
