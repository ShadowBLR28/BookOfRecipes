import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPageProfileComponent } from './author-page-profile.component';

describe('AuthorPageProfileComponent', () => {
  let component: AuthorPageProfileComponent;
  let fixture: ComponentFixture<AuthorPageProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorPageProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorPageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
