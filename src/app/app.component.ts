import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParentAuthComponent } from './Components/Auth/parent-auth/parent-auth.component';
import { AuthService } from './Services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'BookOfRecipes';
  activeModal!: NgbActiveModal;
  modalRef: any;
  @ViewChild('modal') modal!: ParentAuthComponent;

  constructor(
    private modalService: NgbModal,
    private authService: AuthService) {

  }
  ngAfterViewInit(): void {
    this.modalRef = this.modalService.open(ParentAuthComponent, { ariaLabelledBy: 'modal-basic-title', windowClass: 'modal-dialog-centered' });
    this.modalRef.result.then((x: any) => {
      console.log(x);
    })
  }

  closeModal(test: any): void {
    console.log('tes,', test);
    this.modalService.dismissAll();
  }
}
