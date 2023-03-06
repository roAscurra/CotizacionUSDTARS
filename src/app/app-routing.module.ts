import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrecioCryptoComponent } from './componentes/precio-crypto/precio-crypto.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'precioCrypto', pathMatch: 'full'
  },
  { path: 'precioCrypto', component: PrecioCryptoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }