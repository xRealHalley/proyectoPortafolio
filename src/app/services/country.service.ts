import { catchError, of, Observable, map, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CacheStore } from '../menu/pages/banderas/banderas/interfaces/cache-store.interface';
import { Country } from '../menu/pages/banderas/banderas/interfaces/country';
import { Region } from '../menu/pages/banderas/banderas/interfaces/region.type';

@Injectable({providedIn: 'root'})

export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital : { term: '', countries: [] },
    byCountries : { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
    banderaPais: { term: '', countries: [] }
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify( this.cacheStore));
  }

  private loadFromLocalStorage(){
    if ( !localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }


  private getCountriesRequest( url : string ): Observable<Country[]> {
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of ([]) ),
        // delay( 2000 )
      );
  }


  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    const url = `${ this.apiUrl}/alpha/${ code }`;
    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of ( null ) )
      );
  }


  searchCapital( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/capital/${ term }`;
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term, countries }),
        tap( () => this.saveToLocalStorage() )
      );
  }


  searchCountry( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/name/${ term }`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term, countries }),
      tap( () => this.saveToLocalStorage() )
    );
  }


  searchRegion( region: Region ): Observable<Country[]> {
    const url = `${ this.apiUrl}/region/${ region }`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries }),
      tap( () => this.saveToLocalStorage() ),
    );
  }

  searchBandera( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/name/${ term }`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.banderaPais = { term, countries }),
      tap( () => this.saveToLocalStorage() )
    );
  }


}
