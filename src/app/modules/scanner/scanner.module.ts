import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScannerComponent } from './scanner.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [ScannerComponent],
  imports: [
    CommonModule,
    ZXingScannerModule
  ],
  exports: [ScannerComponent]
})
export class ScannerModule { }
