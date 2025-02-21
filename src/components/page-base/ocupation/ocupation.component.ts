import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ocupation } from 'src/models/catalogs';

@Component({
  selector: 'app-ocupation',
  templateUrl: './ocupation.component.html',
  styleUrls: ['./ocupation.component.scss'],
})
export class OcupationComponent implements OnChanges {
  @Input() ocupations: Ocupation[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ocupations']) {
      console.log('Ocupaciones actualizadas:', this.ocupations);
    }
  }
}