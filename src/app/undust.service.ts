import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {ResultDialogComponent} from './result-dialog/result-dialog.component';

@Injectable()
export class UndustService {

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  undustThisFile(image: File) {
    const formData = new FormData();
    formData.append('file', image);
    const req = new HttpRequest('POST', '/api/v1/undust-picture', formData,
      {
        reportProgress: true,
        responseType: 'blob'
      });
    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        console.log(percentDone + '%');
      } else if (event instanceof HttpResponse) {
        const response = event as HttpResponse<File>;
        const blob = new Blob([response.body], {type: 'image/jpeg'});
        this.dialog.open(ResultDialogComponent, {
          width: '100%',
          data: blob
        });
      }
    });
  }
}
