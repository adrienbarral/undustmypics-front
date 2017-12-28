import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhotosCompareComponent } from './photos-compare/photos-compare.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatCardModule, MatButtonModule, MatIconModule, MatDialog, MatDialogModule,
  MatProgressBarModule
} from "@angular/material";
import { TryItComponent } from './try-it/try-it.component';
import {Ng2ImgToolsModule} from "ng2-img-tools";
import {UndustService} from "./undust.service";
import {HttpClientModule} from "@angular/common/http";
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { WaitUploadComponent } from './wait-upload/wait-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotosCompareComponent,
    TryItComponent,
    ResultDialogComponent,
    WaitUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, Ng2ImgToolsModule,
    MatCardModule, MatButtonModule, MatIconModule, HttpClientModule, MatDialogModule, MatProgressBarModule
  ],
  providers: [UndustService],
  bootstrap: [AppComponent],
  entryComponents: [ResultDialogComponent, WaitUploadComponent]
})
export class AppModule { }
