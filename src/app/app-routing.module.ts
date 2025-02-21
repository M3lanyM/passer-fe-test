import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBaseComponent } from 'src/components/page-base/page-base.component';

const routes: Routes = [{path:'', component:PageBaseComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
