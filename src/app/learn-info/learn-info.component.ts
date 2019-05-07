import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'learn-info',
  templateUrl: './learn-info.component.html',
  styleUrls: ['./learn-info.component.scss']
})
export class LearnInfoComponent implements OnInit {

    tabs: TabsComponent;

    constructor(tabs: TabsComponent) {
        this.tabs = tabs;
    }

    ngOnInit() {
    }

    continue() {
        this.tabs.arrangeTabs(1);
    }

}
