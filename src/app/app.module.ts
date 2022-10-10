import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user/user.module';
import { DashComponent } from './dash/dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { DataTablesModule } from 'angular-datatables';
import { TokenInterceptorsService } from './shared/token-interceptors.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { SamComponent } from './sam/sam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxCaptchaModule } from 'ngx-captcha';
import {  SelectDropDownModule } from 'ngx-select-dropdown';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ViewComponent,
    SearchFilterPipe,
    SamComponent
   
    // PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxPaginationModule,
    NgSelectModule,
    BrowserAnimationsModule,
    NgxCaptchaModule,
    NgMultiSelectDropDownModule.forRoot(),
    SelectDropDownModule   ,
    MatSliderModule , 
    MatProgressBarModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    LazyLoadImageModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorsService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
