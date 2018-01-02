import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenDirective } from './hidden.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HiddenDirective],
  exports: [
    HiddenDirective
  ]
})

export class SharedModule { }
