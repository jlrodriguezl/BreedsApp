import { Component, OnInit } from '@angular/core';
import { BreedsService } from 'src/app/services/breeds.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  breeds: any;
  breedsList: String[] = [];
  breedSelected: string;
  breedImages: any[] = [];

  constructor(public breedsService: BreedsService) { }

  ngOnInit() {
    this.loadBreeds();
    this.breedsService.getBreeds().subscribe(
      (data) => {
        //console.log(data);
        this.breeds = data;
      },
      (error) =>{
        console.error(error);
      }
    )
    console.log(this.breeds);
  }

  loadImages(){
    console.log(this.breedSelected);
    this.breedsService.getBreedImages(this.breedSelected).subscribe(
      (data) => { //Success
            this.breedImages = data['message'];
      },
      (error)=>{
        console.error(error);
      }
    )
  }

  loadBreeds(){
    this.breedsList = [
      'affenpinscher',
      'african',
      'airedale',
      'akita',
      'appenzeller',
      'basenji',
      'beagle',
      'bluetick',
      'borzoi',
      'bouvier',
      'boxer',
      'brabancon',
      'briard',
      'bulldog',
      'bullterrier',
      'cairn',
      'cattledog',
      'chihuahua',
      'chow',
      'clumber',
      'cockapoo',
      'collie',
      'coonhound',
      'corgi',
      'cotondetulear',
      'dachshund',
      'dalmatian',
      'dane',
      'deerhound',
      'dhole',
      'dingo',
      'doberman',
      'elkhound',
      'entlebucher',
      'eskimo',
      'frise',
      'germanshepherd',
      'greyhound',
      'groenendael',
      'hound',
      'husky',
      'keeshond',
      'kelpie',
      'komondor',
      'kuvasz',
      'labrador',
      'leonberg',
      'lhasa',
      'malamute',
      'malinois',
      'maltese',
      'mastiff',
      'mexicanhairless',
      'mix',
      'mountain',
      'newfoundland',
      'otterhound',
      'papillon',
      'pekinese',
      'pembroke',
      'pinscher',
      'pointer',
      'pomeranian',
      'poodle',
      'pug',
      'puggle',
      'pyrenees',
      'redbone',
      'retriever',
      'ridgeback',
      'rottweiler',
      'saluki',
      'samoyed',
      'schipperke',
      'schnauzer',
      'setter',
      'sheepdog',
      'shiba',
      'shihtzu',
      'spaniel',
      'springer',
      'stbernard',
      'terrier',
      'vizsla',
      'weimaraner',
      'whippet',
      'wolfhound'
    ];
  }

}
