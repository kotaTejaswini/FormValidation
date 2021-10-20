import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './form-validation/form-validation.component';

const routes: Routes = [  
  {path: '', component:FormValidationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
