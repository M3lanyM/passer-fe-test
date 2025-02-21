import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from 'src/models/catalogs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnChanges {
  @Input() countries: Country[] = [];
  searchTerm: string = '';
  selectedOptions = [
    { value: 'ocupation', label: 'Ocupaciones' },
    { value: 'country', label: 'Países' },
    { value: 'identification-type', label: 'Identificaciones' },
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['countries']) {
      console.log('Países actualizados:', this.countries);
    }
  }

  filteredCountries(): Country[] {
    if (!this.searchTerm) {
      return this.countries;
    }
    return this.countries.filter((country) =>
      country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  selectOption(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Opción seleccionada:', selectedValue);
  }
}