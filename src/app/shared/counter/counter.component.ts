import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Output() itemCountIncEvent = new EventEmitter<number>();
  @Output() itemCountDecEvent = new EventEmitter<number>();
  @Input() itemCount;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.itemCountIncEvent.emit();
  }

  decrement() {
    this.itemCountDecEvent.emit();
  }

}
