import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  error: boolean = false;
  country: Country[] = [];

  constructor( private paisService: PaisService) {}

  buscar( termino: string ) {
    this.error = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
      .subscribe( country => {
        console.log(country)
        this.country = country;
      }, (err) => {
        this.error = true;
      });

  }
 
  sugerencias( termino: string ) {
    this.error = false;
    // TODO: crear sugerencias
  }

}
