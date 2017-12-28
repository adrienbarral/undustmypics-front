import {Component, Input, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-photos-compare',
  templateUrl: './photos-compare.component.html',
  styleUrls: ['./photos-compare.component.css'],
  animations: [
    trigger('swipe', [
      state('before', style({
        width: '100%',
      })),
      state('after', style({
        width: '0%',
      })),
      transition('before => after', animate('2000ms linear')),
      transition('after => before', animate('1ms linear'))
    ])
  ]
})

export class PhotosCompareComponent implements OnInit {

  images = ['IMG_3569.JPG', 'RSCN2679.JPG'];
  counter = 0;
  before: string;
  after: string;
  swipeState = 'before';
  timer: any;
  @Input() width = 800;

  constructor() {
  }

  ngOnInit() {
    this.animationFinished();
    this.timer = setInterval(() => {
      this.swipeState = 'after';
    }, 3000);
  }

  animationFinished() {
    if (this.swipeState === 'after') {
      if (this.counter + 1 >= this.images.length) {
        this.counter = 0;
      } else {
        this.counter++;
      }
      this.swipeState = 'before';
    }
    this.before = 'assets/' + this.images[this.counter];
    this.after = 'assets/UNDUSTED_' + this.images[this.counter];
  }
}
