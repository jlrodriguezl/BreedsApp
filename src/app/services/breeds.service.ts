import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private urlBreedsEndpoint: string = 'https://dog.ceo/api/breeds/list/all';
  private urlImagesEndpoint: string = 'https://dog.ceo/api/breed/';

  constructor(private http: HttpClient) { }

  getBreeds(){
    return this.http.get(this.urlBreedsEndpoint);
  }

  getBreedImages(breed: string){
    return this.http.get(this.urlImagesEndpoint+breed+"/images");
  }
}
