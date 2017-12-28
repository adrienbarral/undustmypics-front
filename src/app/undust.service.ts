import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from "@angular/common/http";
import {MatDialog, MatDialogRef} from "@angular/material";
import {ResultDialogComponent} from "./result-dialog/result-dialog.component";
import {WaitUploadComponent} from "./wait-upload/wait-upload.component";

@Injectable()
export class UndustService {

  waitDialog: MatDialogRef<WaitUploadComponent>;

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
    this.waitDialog = this.dialog.open(WaitUploadComponent, {
      width: '50%',
      disableClose: true
    });
    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.waitDialog.componentInstance.progress = Math.round(100 * event.loaded / event.total) / 2;
      } else if (event.type === HttpEventType.DownloadProgress) {
        this.waitDialog.componentInstance.progress = 50 + Math.round(100 * event.loaded / event.total) / 2;
      } else if (event instanceof HttpResponse) {
        this.waitDialog.close();

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
