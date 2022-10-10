import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})
export class SamComponent implements OnInit {

  loader=true

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private fb : FormBuilder) {}



  ngOnInit(): void {
    setTimeout(() => {
      this.loader=false
      
    }, 5000);

  }

  //  image1 = 'https://images.unsplash.com/photo-1581789164394-810293cd79ce';
  image1 = "https://wallsdesk.com/wp-content/uploads/2017/01/White-Dandelion-Photos.jpg"
  image2 = 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Jungle-HD-Images.jpg';
  image3 = 'http://freebigpictures.com/wp-content/uploads/sunny-woods.jpg';
  image4 = 'https://images.unsplash.com/photo-1599198688091-926a8df3c9be';
 
  
  }
  
 
 





