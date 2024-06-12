import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'map-table',
  templateUrl: 'map-table.component.html',
  styleUrl: 'map-table.component.css'
})

export class MapTableComponent {

  @Input()
  public countries : Country[] = []

}
