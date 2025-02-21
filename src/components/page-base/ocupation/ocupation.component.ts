import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ocupation } from 'src/models/catalogs';

@Component({
  selector: 'app-ocupation',
  templateUrl: './ocupation.component.html',
  styleUrls: ['./ocupation.component.scss'],
})
export class OcupationComponent implements OnChanges {
  @Input() ocupations: Ocupation[] = [];
  selectedOptions = [
    { value: 'ocupation', label: 'Ocupaciones' },
    { value: 'country', label: 'Países' },
    { value: 'identification-type', label: 'Identificaciones' },
  ];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ocupations']) {
      console.log('Ocupaciones actualizadas:', this.ocupations);
    }
  }
  selectOption(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Opción seleccionada:', selectedValue);
  }
}