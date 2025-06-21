import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UID_Assignment';
  constructor(
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.translate.addLangs(['en','ar']);
    this.translate.setDefaultLang('ar');

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const lang = this.route.snapshot.firstChild?.paramMap.get('lang')!;
        if (!this.translate.getLangs().includes(lang)) {
          this.router.navigate(['/ar/home']);
          return;
        }
        this.translate.use(lang);
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      });
  }
}
