import { Country, Ocupation, TypeId } from './catalogs';

export interface BaseResponse {
    success: boolean;
    data: any;
};
export interface ResponseCountryList extends BaseResponse {
    success: boolean;
    data: Country[];
};

export interface ResponseIdentificationType extends BaseResponse {
    data: TypeId[];
};

export interface ResponseOcupation extends BaseResponse {
    success: boolean;
    data: Ocupation[];
}