import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-custom-element',
  templateUrl: './my-custom-element.component.html',
  styleUrls: ['./my-custom-element.component.scss'],
})
export class MyCustomElementComponent implements OnInit {
  @Input() messageToDisplay: string | undefined;
  @Output() onButtonClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick(event: MouseEvent) {
    console.log('event is emitting ', event);
    this.onButtonClick.emit(event.timeStamp.toString());
  }
}
