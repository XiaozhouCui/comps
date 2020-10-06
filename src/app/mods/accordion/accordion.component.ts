import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openedItemIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    if (index === this.openedItemIndex) {
      // click itself to close it
      this.openedItemIndex = -1;
    } else {
      // open an accordion when clicked
      this.openedItemIndex = index;
    }
  }
}
