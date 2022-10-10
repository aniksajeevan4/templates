import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServiceNameService } from '../shared/api.sevice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted:any;

  error!: {};
  click:any
  siteKey:string="6LcbYdMhAAAAAKo4QvRcdx12bXh4vDvUtrzqVQIy"
  // loginForm !:FormGroup;
  

  constructor(private fb:FormBuilder,private route:Router,private service:ServiceNameService) { }
  loginForm=this.fb.group({
    username:new FormControl('',[Validators.minLength(4),Validators.required]),
    password:new FormControl('',[Validators.minLength(4),Validators.required]),
    recaptcha: ['', Validators.required]
    })
  
  ngOnInit(): void {
   
 

    // this.loginForm=this.fb.group({
    //   username:[''],
    //   password:['']
    // });
  }


  submit(){
      // this.service.login(this.loginForm.value).subscribe((res:any)=>{
      // const result=res.payload

        // console.log("ajnasxmdkd",res);
      if(this.loginForm.valid){
        this.service.login(this.loginForm.value).subscribe((res:any)=>{
          const result=res.payload
          console.log(res);
          
          if(result != null){
          sessionStorage.setItem("currentusername",JSON.stringify(this.loginForm.value.username))
          sessionStorage.setItem("token",JSON.stringify(result[0].token))
          alert("successfully logged")
          this.route.navigateByUrl('/view')
          }
          if(res.message==="InValid Customer"){
          this.click=false
          // window.location.reload()
          }
       
            else{
              res.message==="Account is Locked due to 3 Incorrect password try! Please Contact Admin for Activate account"
              console.log("blocked",res.message);
              // alert("account blocked")
            }
          
        },
        // (error) => {                              //Error callback
        //   console.error('error caught in component')
        //   console.log("errrrr",error);
        //   alert("sOMETHIG WENT WRONG")
        //   window.location.reload()
        // }
        )
        }
}

public onSubmit(): void {
  this.submitted = true;
  if(!this.loginForm.valid) {
    return;
  }
}
}

