import {Component, OnInit} from '@angular/core';
import {Ng2ImgToolsService} from 'ng2-img-tools';
import {UndustService} from '../undust.service';

@Component({
  selector: 'app-try-it',
  templateUrl: './try-it.component.html',
  styleUrls: ['./try-it.component.css']
})
export class TryItComponent implements OnInit {

  maxWidth = 4000;
  maxHeight = 4000;

  constructor(private ng2ImgTools: Ng2ImgToolsService, private undust: UndustService) {
  }

  ngOnInit() {
  }

  onFileSelected(files: FileList) {
    if (files.length !== 1) {
      // TODO : Afficher une erreur si > 1
      return;
    }
    const file = files.item(0);
    this.ng2ImgTools.resizeImage(file, this.maxWidth, this.maxHeight).subscribe(resized => {
      this.undust.undustThisFile(resized);
    });
  }

}
