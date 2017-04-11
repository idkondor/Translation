import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Component({
    selector: 'my-app',
    template: `
    <div>
      <h2>{{ 'HOME.TITLE' | translate }}</h2>
      <h2>{{ 'HOME.WIN' | translate }}</h2>
      <label>
        {{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
    </div>
  `,
})
export class AppComponent {
  constructor(private translate: TranslateService) {
        translate.addLangs(["en", "ua"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ua/) ? browserLang : 'en');
    }
}
