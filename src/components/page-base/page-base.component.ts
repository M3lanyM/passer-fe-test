import { Component } from '@angular/core';

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.scss'],
})
export class PageBaseComponent {
  selectedTab: string = 'ocupation';

  selectedOptions = [
    { value: 'ocupation', label: 'Ocupaciones' },
    { value: 'country', label: 'Países' },
    { value: 'identification-type', label: 'Identificaciones' },
  ];
  countries: any;

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  selectOption(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Opción seleccionada:', selectedValue);
  }
}
