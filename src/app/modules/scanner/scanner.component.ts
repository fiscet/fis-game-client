import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  scannerEnabled = false;

  @Output() onCodeFound = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public scanSuccessHandler($event: string) {
    this.scannerEnabled = false;

    this.onCodeFound.emit($event);
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }

}