import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buy-info',
  templateUrl: './buy-info.component.html',
  styleUrls: ['./buy-info.component.scss']
})
export class BuyInfoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    continue() {
        alert("Submit your form by integrating with appropriate API!!!");
    }

}
