import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../constant/URL';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(URL.getMoviesURL);
  }
  
}
