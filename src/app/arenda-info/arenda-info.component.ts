import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'arenda-info',
  templateUrl: './arenda-info.component.html',
  styleUrls: ['./arenda-info.component.scss']
})
export class ArendaInfoComponent implements OnInit {
    tabs: TabsComponent;
    constructor(tabs: TabsComponent) {
        this.tabs = tabs;
    }

    ngOnInit() {
    }

    continue() {
        this.tabs.arrangeTabs(2);
    }

}
