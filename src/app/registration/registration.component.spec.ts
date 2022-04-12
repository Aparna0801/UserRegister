import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { By } from '@angular/platform-browser';


describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [RegistrationComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]

    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();

  });

  it('form invalid when empty', () => {
    component.formGroup.controls['name'].setValue('');
    component.formGroup.controls['email'].setValue('');
    component.formGroup.controls['bio'].setValue('');
    component.formGroup.controls['password'].setValue('');
    expect(component.formGroup.valid).toBeFalsy();
  });
  it('should not allow user to Register', (() => {
    const regForm = {
      name: "Test Name",
      email: "test@gmail.com",
      password: "",
      bio: ""
    };
    component.formGroup.setValue(regForm);
    component.onSubmit(regForm);
    expect(component.formGroup.invalid).toEqual(true);

  }));

});
