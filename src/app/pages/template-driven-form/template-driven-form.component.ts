import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [ActorFormComponent, BrowserModule, CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  private readonly availableLanguages = ['en', 'fr'];
  constructor(private translateService: TranslateService) {}

  toggleLanguage() {
    const currentLang =
      this.translateService.currentLang ?? this.translateService.defaultLang;
    const languages = this.availableLanguages.filter((x) => x !== currentLang);
    this.translateService.use(languages[0]);
  }
}
