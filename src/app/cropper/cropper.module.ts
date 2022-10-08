import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperComponent } from './componens/cropper/cropper.component';
import { UploadImageService } from './services/uploadImage.service';

@NgModule({
  declarations: [
    CropperComponent
  ],
  imports: [
    ImageCropperModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CropperComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers:[
    UploadImageService,
  ]
})
export class CropperModule { }
