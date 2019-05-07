import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
//import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs: TabComponent[] = [];
  selectedTabIndex: number = 0;
  leftBtnInActive: boolean = true;
  rightBtnInActive: boolean = false;

  direction : number = 1;

  @Output() selected = new EventEmitter();

  //@Input() hide : boolean = false;
  _closable : boolean = false;
  @Output() delClosable = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  @Input() set closable(toHide:boolean) {
    this._closable = toHide;
  }
  get closable() { return this._closable; }

  addTab(tab:TabComponent) {
    if (this.tabs.length === 0) {
      tab.selected = true;
    }
    this.tabs.push(tab); //method appends the given element(s) in the last of the array and returns the length of the new array.
  }

  selectTab(tab:TabComponent) {
    this._closable = false; //когда выбираем таб
    this.delClosable.emit(this._closable);
    let tabIndex = this.getTabIndex(tab);

    this.arrangeTabs(tabIndex);
    //console.log('Browser console error!');
  }

  previous() {
    this.arrangeTabs(this.selectedTabIndex - 1);
  }

  next() {
    this.arrangeTabs(this.selectedTabIndex + 1);
  }

  arrangeTabs(tabIndex) {
    this.tabs.forEach((tab, i) => {
      tab.selected = i === tabIndex;
    });
    this.selectedTabIndex = tabIndex;
    //this.selected.emit({selectedTab: this.tabs[tabIndex]});

    if(this.selectedTabIndex === 0) {
      this.leftBtnInActive = true;
      this.rightBtnInActive = false;
    } else if(this.selectedTabIndex === this.tabs.length - 1) {
      this.leftBtnInActive = false;
      this.rightBtnInActive = true;
    } else {
      this.leftBtnInActive = false;
      this.rightBtnInActive = false;
    }
  }

  getTabIndex(selectedTab) {
    return this.tabs.findIndex(tab => tab.tabTitle === selectedTab.tabTitle); //Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции
  }

  changeDirection() {
    console.log('Error!');
    if(this.direction === 1){
        this.direction = 2;
    } else {
      this.direction = 1;
    }
  }

  /*
  isSelected(tab : TabComponent) : boolean {
    return tab.selected && !this._closable;
  }*/
}
