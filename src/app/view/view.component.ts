
import { DataTablesModule } from 'angular-datatables';
import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceNameService } from '../shared/api.sevice';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatePipe } from '@angular/common';
import {  Subscription} from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent implements OnInit ,OnDestroy{
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings;
  dtOptions: DataTables.Settings = {};
  submitted: any;
  showAdd!:boolean;
  showEdit!:boolean;
  id:any;
  idd:any;
  details:any=[];
  language:any=[];
  author:any=[];
  publisher:any=[];
  p=1;
  pz=5;
  searchValue:any
  totalIems:any


  config = {
    searchPlaceholder:'Search',
    search:true, 
    displayKey: "publisherName",
  
  }

  config1 = {
    searchPlaceholder:'Search',
    search:true, 
    displayKey: "authorName",
  
  }

  // PublishersList: any;
  PublishersList:any=[];
  AuthorsList:any=[];


postSubscription:Subscription
auth:Subscription
pub:Subscription

  // this.subscriptions.forEach(subscription => subscription.unsubscribe());
  constructor(private service:ServiceNameService,private route :Router,private fb:FormBuilder) {
    this.details=[];
    this.postSubscription= this.service.getData(this.p,this.pz).subscribe((result:any)=>{
    console.log("data",result.payload);
    this.details=result.payload ;

  
  
    setTimeout(()=>{   
      $('#datatableexample').DataTable( {
        paging: false,
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25],
    });

    },1);
          }, error => console.error(error));
   }
  ngOnDestroy(): void {
  this.postSubscription && this.postSubscription.unsubscribe()
  this.auth && this.auth.unsubscribe();
  }

 
    addForm=this.fb.group({
      bookTitle:new FormControl('',[Validators.minLength(4),Validators.required]),
      language_id:new FormControl('',[Validators.required]),
      mrp:new FormControl('',[Validators.required]),
      PublisherId:new FormControl('',[Validators.required]),
      publisherDate:new FormControl('',[Validators.required]),
      AuthorId:new FormControl('',[Validators.required]),
    })

    
    editForm=this.fb.group({
      bookTitle:new FormControl('',[Validators.minLength(4),Validators.required]),
      language_id:new FormControl('',[Validators.required]),
      mrp:new FormControl('',[Validators.required]),
      PublisherId:new FormControl('',[Validators.required]),
      publisherDate:new FormControl('',[Validators.required]),
      AuthorId:new FormControl('',[Validators.required]),
        })


  ngOnInit(): void {
    this.PublishersList=[]
    this.author=[]

    console.log("anikk", this.PublishersList);
    
    const that = this;
    this.getAllEmployee()
    this.getLanguage()
    that.getAuthor()
    that.getPublisher() 
    this.getdata()
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      clearSearchFilter:true,
      limitSelection:1,
      closeDropDownOnSelection:true,
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
    
  }

//   addd(){   
//     if(this.addForm.valid){
//        this.service.addData(this.addForm.value).subscribe((result)=>{
//        console.log(result);
//        this.addForm.reset();
//        this.getAllEmployee()
//        })
//       //  alert("added succesfully")
//        this.addForm.reset();
//       //  let ref=document.getElementById("cancel")
//       //  ref?.click();
//       //  window.location.reload()
//   }
//   else{
//     alert("Please insert all the data correctly")
//       }
// }

add() {
  if(this.addForm.valid){
  var publisher:any=this.addForm.get('PublisherId')?.value;
  var author:any=this.addForm.get('AuthorId')?.value;
   var result={
     "bookTitle":this.addForm.get('bookTitle')?.value,
     "AuthorId":author.author_Id,
     "PublisherId":publisher.publisher_id,
     "mrp":this.addForm.get('mrp')?.value,
     "publisherDate":this.addForm.get('publisherDate')?.value,
     "language_id":this.addForm.get('language_id')?.value
   }
   console.log(result);

       this.service.addData(result).subscribe((result:any) => {
       console.log(result);
       this.addForm.reset();
       this.getAllEmployee()
       })
     
 } 
 else{
  alert("Please insert all the data correctly")
    }
}

searchChangedPublisher(event:any){
  if(event.length>3){
    this.service.getPublish(event).subscribe((Publisher: any) => {
       this.PublishersList = Publisher.payload;
       });
  }
  }

  searchChangedAuthor(event:any){
    if(event.length>3){
      this.service.getAuthor().subscribe((Auther: any) => {
      this.AuthorsList = Auther.payload;
        });
    }
    }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  getdata(){
    let tmp:any = [];
    this.service.getPublisher().subscribe((res:any)=>{
    this.publisher=res.payload
      // for(let i=0; i < this.publisher.length; i++) {
      //   tmp.push({ item_id: this.publisher[i].publisher_id , item_text: this.publisher[i].publisherName });
      // }
    this.dropdownList = res.payload;
    console.log("dta",this.dropdownList);
    })
 }

  getAllEmployee(){
    this.details=[];
    this.auth=this.service.getData(1,5).subscribe((result:any)=>{
    console.log("data",result.payload);
    this.details=result.payload ;
     })
  }

  getLanguage(){
    this.service.getlanguage().subscribe((result:any)=>{
    console.log("language",result.payload);
    this.language=result.payload;
    })
  }


  getAuthor(){
    this.service.getAuthor().subscribe((result:any)=>{
      console.log("Author",result.payload);
      this.author=result.payload;  
    })
  }

  getPublisher(){
    this.service.getPublisher().subscribe((result:any)=>{
      console.log("publisher",result.payload);
      this.publisher=result.payload;  
    })
  }

  clickShow(){
    this.addForm.reset()
    this.showAdd=true;
    this.showEdit=false;
  }

  edit(data:any){
    var datePipe=new DatePipe('en-US')
    var value =datePipe.transform(data.publisherDate,'yyyy-MM-dd')
    this.id=data.bookId
    console.log(this.id);
    this.editForm.controls['bookTitle'].setValue(data.bookTitle)
    this.editForm.controls['mrp'].setValue(data.mrp)
    this.editForm.controls['language_id'].setValue(data.language_Id),
    this.editForm.controls['PublisherId'].setValue(data.publisherId)
    this.editForm.controls['publisherDate'].setValue(value),
    this.editForm.controls['AuthorId'].setValue(data.authorId)
  }



update(){
  if(this.editForm.valid){
        this.service.update(this.editForm.value,this.id).subscribe((result)=>{
          // alert("updated succesfully")
          this.editForm.reset();
          // let ref=document.getElementById("cancel")
          // ref?.click();
          this.getAllEmployee();
        })
        // window.location.reload()

       
  }
  else{
        alert("Please insert all the data correctly")
        };
}


delete(data:any){
  this.idd=data.bookId
  this.service.deletelist(this.idd).subscribe((result)=>{
  console.log("deleted",this.idd); 
  this.getAllEmployee
  })
  // window.location.reload()
}


  public onSubmit(): void {
    this.submitted = true;
    if(!this.editForm.valid) {
    return;
    }
}

  logout(){
    sessionStorage.removeItem('currentusername');
    sessionStorage.removeItem('token');
    this.route.navigateByUrl('login')
  } 

  loadChange(page:any){
    this.details=[];
    this.p=page;
    this.service.getData(page,5).subscribe((result:any)=>{
      console.log("data",result.payload);
      this.details=result.payload;
      console.log("d",this.details);
     })
  }

}

