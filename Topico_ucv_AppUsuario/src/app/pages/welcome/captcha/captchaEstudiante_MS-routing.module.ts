import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptchaPage } from './captchaEstudiante_MS.page';

const routes: Routes = [
  {
    path: '',
    component: CaptchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptchaPageRoutingModule {}
