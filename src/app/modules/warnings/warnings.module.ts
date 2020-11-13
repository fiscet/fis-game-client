import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WarningsComponent } from './warnings.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [WarningsComponent],
  declarations: [WarningsComponent]
})
export class WarningsModule { }
