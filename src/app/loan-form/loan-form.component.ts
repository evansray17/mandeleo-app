import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {
myForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstname : ["",
       [Validators.required]],

      middlename: ["",
      [Validators.required]],

      lastname  : ["", 
      [Validators.required]],

      idNo  : ["", 
      [Validators.required]],
      
      dBirth  : ["", 
      [Validators.required]],
      
      hAddress  : ["", 
      [Validators.required]],
       
      hTelNo  : ["", 
      [Validators.required]],
      
      mobileNo  : ["", 
      [Validators.required]],
      
      pinNo  : ["", 
      [Validators.required]],
      
      officeNo  : ["", 
      [Validators.required]],
      
      emailAdd  : ["", 
      [Validators.required],
      [Validators.pattern("[^ @]*@[^ @]*")]],
      
      maritualSts  : ["", 
      [Validators.required]],
      
      numberOfD  : ["", 
      [Validators.required]],
      ammountApp  : ["", 
      [Validators.required]],
      purposeOfL  : ["", 
      [Validators.required]],
      loanType  : ["", 
      [Validators.required]],
      branchCode  : ["", 
      [Validators.required]],
      branchName  : ["", 
      [Validators.required]],
      bCode  : ["", 
      [Validators.required]],
      bName  : ["", 
      [Validators.required]],
      accountC  : ["", 
      [Validators.required]],
      accntName  : ["", 
      [Validators.required]],
      oIncome  : ["", 
      [Validators.required]],
      rIncome  : ["", 
      [Validators.required]],
      bIncome  : ["", 
      [Validators.required]],
      yOfOp  : ["", 
      [Validators.required]],
      typeOf  : ["", 
      [Validators.required]],
      destination  : ["", 
      [Validators.required]],
      StaffNo  : ["", 
      [Validators.required]],
      telNo  : ["", 
      [Validators.required]],
      phyAdd  : ["", 
      [Validators.required]],
      empTerm  : ["", 
      [Validators.required]],
      PostalNo  : ["", 
      [Validators.required]],
      appEmp  : ["", 
      [Validators.required]],
    })
  }
  get firstname() {
    return this.myForm.get("firstname")
  }
  get middlename() {
    return this.myForm.get("middlename")
  }
  get lastname() {
    return this.myForm.get("lastname")
  }
  get idNo() {
    return this.myForm.get("idNo")
  }
  get dBirth() {
    return this.myForm.get("dBirth")
  }
  get hAddress() {
    return this.myForm.get("hAddress")
  }
  get hTelNo() {
    return this.myForm.get("hTelNo")
  }
  get mobileNo() {
    return this.myForm.get("mobileNo")
  }
  get pinNo() {
    return this.myForm.get("pinNo")
  }
  get officeNo() {
    return this.myForm.get("officeNo")
  }
  get emailAdd() {
    return this.myForm.get("emailAdd")
  }
  get maritualSts() {
    return this.myForm.get("maritualSts")
  }
  get appEmp() {
    return this.myForm.get("appEmp")
  }
  get phyAdd() {
    return this.myForm.get("phyAdd")
  }
  get PostalNo() {
    return this.myForm.get("PostalNo")
  }
  get telNo() {
    return this.myForm.get("telNo")
  }
  get destination() {
    return this.myForm.get("destination")
  }
  get StaffNo() {
    return this.myForm.get("StaffNo")
  }
  get numberOfD() {
    return this.myForm.get("numberOfD")
  }
  get yOfOp() {
    return this.myForm.get("yOfOp")
  }
  get bIncome() {
    return this.myForm.get("bIncome")
  }
  get rIncome() {
    return this.myForm.get("rIncome")
  }
  get accntName() {
    return this.myForm.get("accntName")
  }
  get oIncome() {
    return this.myForm.get("oIncome")
  }
  get accountC() {
    return this.myForm.get("accountC")
  }
  get bName() {
    return this.myForm.get("bName")
  }
  get bCode() {
    return this.myForm.get("bCode")
  }
  get branchName() {
    return this.myForm.get("branchName")
  }
  get branchCode() {
    return this.myForm.get("branchCode")
  }
  get loanType() {
    return this.myForm.get("loanType")
  }
  get purposeOfL() {
    return this.myForm.get("purposeOfL")
  }
  get ammountApp() {
    return this.myForm.get("ammountApp")
  }
  get empTerm() {
    return this.myForm.get("empTerm")
  }
  get typeOf() {
    return this.myForm.get("typeOf")
  }
  onSubmit() {
    this.myForm.valid;
    console.log("Form submited" , this.myForm.value );
    this.myForm.reset();
  }
  onOpen(event: any) {
    console.log(event);
  }
}

