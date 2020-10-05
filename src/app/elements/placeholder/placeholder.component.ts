import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true; // show header by default
  @Input() lines = 3; // show 3 lines by default

  constructor() {}

  ngOnInit(): void {}
}
