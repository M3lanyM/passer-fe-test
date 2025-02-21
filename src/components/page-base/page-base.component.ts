import { Component, OnInit } from '@angular/core';
import { GeneralMethodsService } from 'src/endpoints/catalogs.connections';
import { Country, Ocupation, TypeId } from 'src/models/catalogs';

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.scss'],
})
export class PageBaseComponent implements OnInit {
  activeTab: string = 'ocupation';
  countries: Country[] = [];
  ocupations: Ocupation[] = [];
  identificationTypes: TypeId[] = [];

  constructor(private generalMethodsService: GeneralMethodsService) { }

  ngOnInit(): void {
    this.loadData();
  }
  async loadData() {
    try {
      if (this.activeTab === 'ocupation') {
        const response = await this.generalMethodsService.getOcupations();
        console.log('Respuesta de ocupaciones:', response);
        if (response.success && response.data.length > 0) {
          this.ocupations = response.data;
        } else {
          console.warn('No se encontraron ocupaciones.');
          this.ocupations = [];
        }
      }
      if (this.activeTab === 'country') {
        const response = await this.generalMethodsService.getCountries();
        console.log('Respuesta de paises:', response);
        if (response.success && response.data.length > 0) {
          this.countries = response.data;
        } else {
          console.warn('No se encontraron paises.');
          this.countries = [];
        }
      }
      if (this.activeTab === 'identification-type') {
        const response = await this.generalMethodsService.getIdentificationTypes();
        if (response.success && response.data.length > 0) {
          this.identificationTypes = response.data;
        } else {
          this.identificationTypes = [];
        }
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
      this.countries = [];
    }
  }

  changeTab(tab: string) {
    this.activeTab = tab;
    this.loadData();
  }
}