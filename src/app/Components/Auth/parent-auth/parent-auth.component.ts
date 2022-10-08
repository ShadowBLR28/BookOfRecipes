import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatchValidator } from 'src/app/providers/matchValidator';

@Component({
  selector: 'app-parent-auth',
  templateUrl: './parent-auth.component.html',
  styleUrls: ['./parent-auth.component.css']
})
export class ParentAuthComponent implements OnInit {
  @ViewChild('authModal') authModal: any;
  @Output() closeModal = new EventEmitter();
  @Output() test = new EventEmitter();
  modalRef: any;
  isLoginModal: boolean = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted: boolean = false;
  isModalShowed: boolean = false;

  public get lf(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  public get loginLF() { return this.lf['login']; }

  public get passwordLF() { return this.lf['password']; }

  public get rf(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  public get loginRF() { return this.rf['login']; }

  public get passwordRF() { return this.rf['password']; }

  public get confirmPassword() { return this.rf['confirmPassword']; }

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      login: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      password: ['', { validators: [Validators.required, Validators.minLength(6)], updatedOn: 'blur' }]
    })

    this.registerForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validators: [MatchValidator.match('password', 'confirmPassword')] })
  }

  ngOnInit(): void {
  }

  onLoginSubmit() {
  }

  onRegistrationSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.loginRF.errors));
    console.log(JSON.stringify(this.passwordRF.errors));

    if (this.registerForm.invalid) {
      return;
    }

    if ("success auth") {
      this.activeModal.close();
    }
    else if ("success reg") {
      this.isLoginModal = true;
    }
  }
}
