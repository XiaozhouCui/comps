import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  // Output decorator
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement); // <app-modal>
  }

  // life cycle hook: append modal directly under <body>
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  // life cycle hook: remove <app-modal>
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  // child-to-parent communication: emit a "close" event to parent component (mods-home)
  onCloseClick() {
    this.close.emit();
  }
}
