import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDialogosComponent } from './app-dialogos/app-dialogos.component';
import { PipesPipe } from './app-pipes/pipes.pipe';



@NgModule({
  declarations: [
    AppDialogosComponent,
    PipesPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    AppDialogosComponent,
    PipesPipe
  ]
})
export class AppCompartilhadoModule { }
