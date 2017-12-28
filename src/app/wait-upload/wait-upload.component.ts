import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wait-upload',
  templateUrl: './wait-upload.component.html',
  styleUrls: ['./wait-upload.component.css']
})
export class WaitUploadComponent implements OnInit {

  @Input()
  progress: number;

  constructor() {
  }

  ngOnInit() {
  }

}
