import { Component, OnInit } from '@angular/core';
import { WarningService } from '../../services/warning.service';
import { delay, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.scss']
})
export class WarningsComponent implements OnInit {

  constructor(public wrn: WarningService) { }

  ngOnInit() {

    const action = this.wrn.textUpdated.pipe(
      debounceTime(this.wrn.duration)
      // take(1)
    ).subscribe(() => {
      // console.log('c');
      if (this.wrn.text) {
        this.clear();
      }
    });
  }

  clear() {
    this.wrn.msg('');
  }
}
