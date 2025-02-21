import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TypeId } from 'src/models/catalogs';

@Component({
  selector: 'app-identification-type',
  templateUrl: './identification-type.component.html',
  styleUrls: ['./identification-type.component.scss']
})
export class IdentificationTypeComponent implements OnChanges {
  @Input() identificationTypes: TypeId[] = [];
  selectedType: string | number = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['identificationTypes']) {
      console.log('Tipos de identificación actualizados:', this.identificationTypes);
    }
  }

  selectOption(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;
    console.log('Tipo de identificación seleccionado:', this.selectedType);
  }
}
