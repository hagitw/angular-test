import { Component, OnInit , Output,EventEmitter ,Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public router:Router) {   }
   
@Output() onClickAdd = new EventEmitter <any>();
@Input()EditItem:any;
  Name:string;
  Address:string;
  Phone:string;
  Url:string;

  SaveEdit()
  {
    let obj ={Name : this.Name,Address:this.Address,["Phone Number"] : this.Phone,["Url Image"] :  this.Url }
    this.onClickAdd.emit(obj);
    console.log(obj);
    console.log("Edit");

  }
  ngOnInit() {
    console.log(this.EditItem);
    this.Name=this.EditItem.Name;
    this.Address=this.EditItem.Address;
    this.Phone=this.EditItem["Phone Number"];
    this.Url=this.EditItem["Url Image"];
  }

}
