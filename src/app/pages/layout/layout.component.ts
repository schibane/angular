import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  private readonly availableLanguages = ['en', 'fr'];
  constructor(private translateService: TranslateService) {}

  toggleLanguage() {
    const currentLang =
      this.translateService.currentLang ?? this.translateService.defaultLang;
    const languages = this.availableLanguages.filter((x) => x !== currentLang);
    this.translateService.use(languages[0]);
  }
}
