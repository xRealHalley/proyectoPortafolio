import { CacheStore } from './../../interfaces/cache-store.interface';
import { catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../../../services/country.service';


import { Region } from '../../interfaces/region.type';
import { Country } from '../../interfaces/country';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries : Country [] = [];
  public isLoading : boolean = false;
  public regions : Region[] = ['Africa', 'Americas', 'Asia', 'Europe','Oceania'];
  public selectedRegion?: Region;

  constructor( private countriesService : CountryService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ):void {

    this.isLoading = true;

    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
