import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-transfer-docs',
  templateUrl: './transfer-docs.component.html',
  styleUrls: ['./transfer-docs.component.css']
})
export class TransferDocsComponent   {
  formGroup: FormGroup;
  removeSize: number;
  submitted: boolean;
  users: any;


 
  

  constructor(private formBuilder: FormBuilder, private userService ?: UserService) { }

  ngOnInit() {
    this.validate();
   
   this.userService.getTransaction().subscribe(data => {
    this.users = data
    console.log(this.users);
  }
  );
}


  public validate(): void {
    this.formGroup = new FormGroup(
      {
      formArray1: new FormArray([this.initSender()]),
      formArray2: new FormArray([this.initReceiver()]),
      addFileArray: new FormArray([this.initFile()]),
      docName: new FormArray([this.initDocName()]),

    },

    )
    this.formGroup.valueChanges.subscribe(data => console.log(data));
  }

  

  get f() {
    return this.formGroup.controls;
  }

  public initDocs(): FormGroup {
    return new FormGroup({
      docName: new FormControl("", [
        Validators.compose([Validators.required])
      ])
    });
  }

  public initSender(): FormGroup {
    return new FormGroup({
      senderEmail: new FormControl("", [
        Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.minLength(1)])
      ])
    });
  }

  public initReceiver(): FormGroup {
    return new FormGroup({
      receiverEmail: new FormControl("", [
        Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.minLength(1)])
      ])
    });
  }

  public initDocName(): FormGroup {
    return new FormGroup({
      attachFile: new FormControl("", [
        Validators.compose([Validators.required])
      ])
    });
  }

  public initFile(): FormGroup {
    return new FormGroup({
      attachFile: new FormControl("", [
        Validators.compose([Validators.required])
      ])
    });
  }
  public addSender(): void {
    const control = <FormArray>this.f.formArray1;
    control.push(this.initSender());
  }

  removeSender(index : number) {
    const control = <FormArray>this.f.formArray1;
    if(control.length>1) 
    control.removeAt(index);
  }

  public addReceiver(): void {
    const control = <FormArray>this.f.formArray2;
    control.push(this.initReceiver());
  }

  removeReceiver(index : number) {
    const control = <FormArray>this.f.formArray2;
 if(control.length>1) 
 control.removeAt(index);
  }

  addFile(){
    const control = <FormArray>this.f.addFileArray;
    control.push(this.initFile());
  }

  removeFile(index: number){
    const control = <FormArray>this.f.addFileArray;
 if(control.length>1) 
 control.removeAt(index);
  }

  

  public sendersGetInfo(e): void {
    if (<FormArray>this.f.formArray1valid) {
      alert("Summit success!");
      console.log(e.value);
    }
    else{
      alert("Enter valid Sender Email ");
      console.log(e.value);
    }
  }

  
  public receiversGetInfo(e): void {
    if (<FormArray>this.f.formArray2valid) {
      alert("Summit success!");
      console.log(e.value);
    }
    else{
      alert("Enter valid Sender Email ");
      console.log(e.value);
    }
  }


  public onSubmit(e): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      alert("Summit success!");
      console.log(e.value);
    }
    else{
      alert("Enter All Mandatory Fields");
      console.log(e.value);

    }
  }



}
