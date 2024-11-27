import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [TranslateModule, ActorFormComponent, UserFormComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
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
