import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { data } from 'jquery';
import { map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {


constructor(private http :HttpClient) { }

url=environment.baseUrl+'login'
get=environment.baseUrl+'search/16895'
post=environment.baseUrl+'AddBook'
view=environment.baseUrl+'bookview'
put=environment.baseUrl+'update/'
delete=environment.baseUrl+'delete/'
lang=environment.baseUrl+'getLanguage'
auth=environment.baseUrl+'getAuthors'
publish=environment.baseUrl+'Publisher'
page=""
pub=environment.baseUrl+'Publisher?PublisherSearch='
aut=environment.baseUrl+'getAuthors?AuthorSearch='
   
    login(data:any){
        return this.http.post<any>(this.url,data)
    }

    getData(p:number,size:number){
        return this.http.get<any>(this.view+'?PageNumber='+p+'&PageSize='+size)
    }

    addData(data: any) {
        return this.http.post<any>(this.post, data);
     }

    update(data: any,id:number) {
        return this.http.put<any>(this.put+id, data)
      }

    deletelist(idd:number) {
        return this.http.delete<any>(this.delete+idd)
     }
    

    get isLoggedIn(): boolean { 
        const user = JSON.parse(sessionStorage.getItem("currentusername")!);
        return user !== null ? true : false;
    }  

    getToken(){
        return sessionStorage.getItem('token')||''
    }

    getlanguage(){
        return this.http.get<any>(this.lang)
    }

    getAuthor(){
        return this.http.get<any>(this.auth)
    }

    getPublisher(){
        return this.http.get<any>(this.publish)
    }

    getPublish(item:any){
        return this.http.get<any>(this.pub+item)
        }
        GetAuth(value:any){
            return this.http.get<any>(this.aut+value);
          }
        //   http://192.168.12.112:5001/LibraryManagent/ Publisher?PublisherSearch=
       
}