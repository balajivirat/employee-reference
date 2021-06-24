import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  componentdata: any;
  url = "https://mysterious-castle-20545.herokuapp.com/";
  constructor(private http: HttpClient) { }

  //This is to get value from the Componet to service
  signupPost(value: any) {
    console.log('service', value);
    return this.http.post("https://mysterious-castle-20545.herokuapp.com/user", value)
    //  return this.http.post("http://localhost:3000/user",value)
  }
  //This is to get value from the Nodejs server to service
  getuser() {
    return this
      .http.get(`https://mysterious-castle-20545.herokuapp.com/users`).pipe(map(res => res))
    // .http.get(`http://localhost:3000/users`).pipe(map(res => res))
  }
  postusers(value: any) {
    return this
      .http.post(`https://mysterious-castle-20545.herokuapp.com/gets`, value)
    // .http.post(`http://localhost:3000/gets`,value)
  }

  postContent(value: any) {
    return this.http.post("https://mysterious-castle-20545.herokuapp.com/content", value)
    // return this.http.post("http://localhost:3000/content",value)
  }
  getcontent() {
    return this.http.get(`https://mysterious-castle-20545.herokuapp.com/content`).pipe(map(res => res))
    // return this.http.get(`http://localhost:3000/content`).pipe(map(res => res))
  }


  deletecontent(id: any) {
    var id = id;
    return this
      .http
      .delete(`${this.url}/delete/${id}`)
  }

  editcontent(value: any) {
    console.log('service edit....................', value);
    return this.http.put("https://mysterious-castle-20545.herokuapp.com/edit", value)
    // return this.http.put("http://localhost:3000/edit",value)
  }
}