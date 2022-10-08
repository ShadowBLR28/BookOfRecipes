import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { environment } from 'src/environments/environment';
import { ImageFormBuilder } from '../../helpers/imageFormBuildr';
import { UploadImageService } from '../../services/uploadImage.service';

@Component({
  selector: 'cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {

  @Output()
  imageChanged = new EventEmitter<string>();
  @Input()
  img!: string

  imgChangeEvt: any = '';
  cropImgPreview: string = '';
  url: string = ''

  constructor(
    private modalService: NgbModal,
    private uploadImageService: UploadImageService) { }

  ngOnInit(): void {
  }

  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'modal-dialog-centered' })
  }

  onFileChange(event: any): void {
    this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent): void {
    this.cropImgPreview = e.base64!;
  }
  imgLoad() {
    // display cropper tool
  }
  initCropper() {
    // init cropper
  }

  onLoad() {
    let form = new ImageFormBuilder()
      .setUploadPreset(environment.folderName)
      .setCloudName(environment.cloudName)
      .setFile(this.cropImgPreview)
      .create();

    this.uploadImageService.upload(form).subscribe((data) => {
      console.log(data);
      this.url = data.url;
      this.imageChanged.emit(this.url)
    });
  }

  imgFailed() {
    console.log('img failed');
  }

}
