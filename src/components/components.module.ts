import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// import { NgxPaginationModule } from 'ngx-pagination';
import { AppMaterialModule } from 'src/app/app.material.module';

import { BoxWhiteComponent } from 'src/components/box-white/box-white.component';
import { TabsComponent } from 'src/components/tabs/tabs.component';
import { PageBaseComponent } from './page-base/page-base.component';
import { OcupationComponent } from './page-base/ocupation/ocupation.component';
import { CountryComponent } from './page-base/country/country.component';
import { IdentificationTypeComponent } from './page-base/identification-type/identification-type.component';


@NgModule({
  declarations: [
    BoxWhiteComponent,
    TabsComponent,
    PageBaseComponent,
    OcupationComponent,
    CountryComponent,
    IdentificationTypeComponent
  ],
  imports: [
    RouterModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    // NgxPaginationModule,
    AppMaterialModule
  ],
  exports: [
    BoxWhiteComponent,
    PageBaseComponent,
    OcupationComponent,
    CountryComponent,
    IdentificationTypeComponent,
    TabsComponent
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-CR' }]
})

export class ComponentsModule {}
