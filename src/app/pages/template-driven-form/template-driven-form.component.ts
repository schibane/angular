import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActorFormComponent } from './actor-form/actor-form.component';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [ActorFormComponent, TranslateModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  // private readonly availableLanguages = ['en', 'fr'];
  // constructor(private translateService: TranslateService) {}
  // toggleLanguage() {
  //   const currentLang =
  //     this.translateService.currentLang ?? this.translateService.defaultLang;
  //   const languages = this.availableLanguages.filter((x) => x !== currentLang);
  //   this.translateService.use(languages[0]);
  // }
}
