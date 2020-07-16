import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  formAddMovies: FormGroup;
  formData:any;

  constructor() { }

  ngOnInit() {

    this.formAddMovies = new FormGroup({
      'movieData': new FormGroup({
        'title': new FormControl(null, [Validators.required]),
        'year': new FormControl(null, [Validators.required]),
        'cast': new FormControl(null, [Validators.required]),
        'genres': new FormControl(null, [Validators.required])
      })
    });

    this.formAddMovies.setValue({
      'movieData': {
        'title': '',
        'year': '',
        'cast': '',
        'genres': ''
      }
    })
  }

  onSubmit() {    
     this.formData =this.formAddMovies.value;
  }

}
