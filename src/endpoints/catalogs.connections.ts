import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCountryList, ResponseIdentificationType, ResponseOcupation } from 'src/models/response-catalogs';

@Injectable({
  providedIn: 'root',
})
export class GeneralMethodsService {

  private urlCatalogs: string = '';
  // EXTENTIONS
  private readonly GET_COUNTRIES = '/countries';
  private readonly GET_TYPE_ID = '/identificationTypes';
  private readonly GET_OCUPATIONS = '/occupations';

  constructor(private http: HttpClient) {
    this.urlCatalogs = environment.serverUrlCatalogs;
  }

  // EXAMPLE
  //   async methodExample(): Promise<typeResponse> {
  //     const response$ = this.http.get<typeResponse>(
  //       this.urlCatalogs + this.extention,
  //     );

  //     return await lastValueFrom(response$);
  //   }
  // get all ocupations from the server
  async getOcupations(): Promise<ResponseOcupation> {
    try {
      const response$ = this.http.get<ResponseOcupation>(
        `${this.urlCatalogs}${this.GET_OCUPATIONS}`
      );
      const result = await lastValueFrom(response$);
      if (result.success) {
        return result;
      } else {
        console.warn('No se encontraron ocupaciones.');
        return { success: false, data: [] };
      }
    } catch (error) {
      console.error('Error al obtener ocupaciones:', error);
      return { success: false, data: [] };
    }
  }
  async getCountries(): Promise<ResponseCountryList> {
    try {
      const response$ = this.http.get<ResponseCountryList>(
        `${this.urlCatalogs}${this.GET_COUNTRIES}`
      );
      const result = await lastValueFrom(response$);
      if (result.success) {
        return result;
      } else {
        console.warn('No se encontraron paises.');
        return { success: false, data: [] };
      }
    } catch (error) {
      console.error('Error al obtener paises:', error);
      return { success: false, data: [] };
    }
  }
  async getIdentificationTypes(): Promise<ResponseIdentificationType> {
    try {
      const response$ = this.http.get<ResponseIdentificationType>(
        `${this.urlCatalogs}${this.GET_TYPE_ID}`
      );
      const result = await lastValueFrom(response$);
      if (result.success) {
        return result;
      } else {
        console.warn('No se encontraron tipos de identificación.');
        return { success: false, data: [] };
      }
    } catch (error) {
      console.error('Error al obtener tipos de identificación:', error);
      return { success: false, data: [] };
    }
}

}