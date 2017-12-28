import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent {

  image: SafeResourceUrl;

  constructor(@Inject(MAT_DIALOG_DATA)image: Blob, private sanitizer: DomSanitizer)  {
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(image));
  }
}
