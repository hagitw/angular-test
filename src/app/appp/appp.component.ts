import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import {FilterPipe} from '../filter.pipe';

@Component({
  selector: 'appp',
  templateUrl: './appp.component.html',
  styleUrls: ['./appp.component.css']
})
export class ApppComponent implements OnInit {
// a:boolean=false;
   ngOnInit() {
// this.item=this.ActivatedRoute.snapshot.paramMap.get("id");
// this.a= this.item.lenght > 0 ? true : false;
// if(this.a){this.arrjson.push(this.item);}
 }
 inputv:string;
 onClickAddHandler($event: any) {
    this.arrjson.push($event);
    console.log(this.arrjson);
    this.ShowForm=false;
  }
  constructor(public router: Router,public ActivatedRoute:ActivatedRoute, public Service: AppService) { }

  arrjson = [{
    "Name": "John",
    "Address": 1,
    "Phone Number": "0507894561",
    "Url Image": "http://albums.tapuz.co.il/mfhp-webbuilder/7/7/2/8/1799433112.jpg"
  },
  {
    "Name": "John",
    "Address": 2,
    "Phone Number": "0507894561",
    "Url Image": "http://albums.tapuz.co.il/mfhp-webbuilder/7/7/2/8/1799433112.jpg"
  },
  {
    "Name": "John",
    "Address": 3,
    "Phone Number": "0507894561",
    "Url Image": "http://albums.tapuz.co.il/mfhp-webbuilder/7/7/2/8/1799433112.jpg"
  }];

Item:any;
ShowForm:boolean = false;

  EditItem(item) {
this.Item=item;
    // this.Service.EditItem = item;
    this.ShowForm=true;
    console.log("EditItem" + item);
  }
  DeleteItem(i) {
    this.arrjson.splice(i, 1);
    console.log("DeleteItem" + i);
  }
}
