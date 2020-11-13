import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  title = 'NgFis'

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('hu');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang);
  }
}
