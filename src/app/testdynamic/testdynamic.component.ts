import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
  FormGroup
} from "@angular/forms";

@Component({
  selector: "app-testdynamic",
  templateUrl: "./testdynamic.component.html",
  styleUrls: ["./testdynamic.component.css"]
})
export class TestdynamicComponent {
  formGroup: FormGroup;

  ngOnInit() {
    this.validate();
  }

  public validate(): void {
    this.formGroup = new FormGroup({
      formArray1: new FormArray([this.initSender()]),
      formArray2: new FormArray([this.initReceiver()])
    })
    this.formGroup.valueChanges.subscribe(data => console.log(data));
  }

  get f() {
    return this.formGroup.controls;
  }

  public initSender(): FormGroup {
    return new FormGroup({
      senderEmail: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{3}")
      ])
    });
  }

  public initReceiver(): FormGroup {
    return new FormGroup({
      receiverEmail: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{3}")
      ])
    });
  }

  public addSender(): void {
    const control = <FormArray>this.f.formArray1;
    control.push(this.initSender());
  }

  removeSender(index) {
    const control = <FormArray>this.f.formArray1;
    control.removeAt(index);
  }

  public addReceiver(): void {
    const control = <FormArray>this.f.formArray2;
    control.push(this.initReceiver());
  }

  removeReceiver(index) {
    const control = <FormArray>this.f.formArray2;
    control.removeAt(index);
  }


  public onSubmit(e): void {
    if (this.formGroup.valid) {
      alert("Summit success!");
      console.log(e.value);
    }
    else{
      alert("Enter all fields");
      console.log(e.value);
    }
  }

  constructor() {}
}
