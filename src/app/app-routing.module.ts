import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

// ROUTES
const appRoutes: Routes = [

    { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // TODO: Para ver la traza de las rutas.
      { enableTracing: false })
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
