import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../../../../../services/country.service';

@Component({
  selector: 'app-bandera-pais',
  templateUrl: './bandera-pais.component.html',
  styles: ``
})
export class BanderaPaisComponent implements OnInit {

  public countries : Country [] = [];
  public isLoading : boolean = false;
  public initialValue : string = '';

  constructor ( private countriesService : CountryService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.banderaPais.countries;
    this.initialValue = this.countriesService.cacheStore.banderaPais.term;
  }

  searchBanderaPais ( pais : string ) : void {

    this.isLoading = true;

    this.countriesService.searchBandera( pais )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
