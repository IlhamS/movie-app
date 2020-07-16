import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { AddMovieComponent } from './add-movie/add-movie.component'
       

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  movieData: any;
  totalRecords: number;

  ngOnInit() {
    this.getAllMovies();
  }

  // get all movies
  getAllMovies(){
    this.moviesService.getMovies().subscribe(
      response => {
       this.movieData = response;
       this.totalRecords = this.movieData.length;
      },
      error => {       
      }
    );

  }
  

}
