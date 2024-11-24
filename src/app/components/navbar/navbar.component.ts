import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
// import { CacheParamEnum } from 'src/app/models/enums/cache-param.enum';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    StyleClassModule,
    RippleModule,
    ToastModule,
    TranslateModule,
    AvatarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() changeLanguageEvent = new EventEmitter<string>();
  isLanguageOptionsHide: boolean = true;

  constructor(private router: Router) {}

  onLogoutClick() {
    // localStorage.removeItem(CacheParamEnum.userInfo);
    // this.router.navigate(['login']);
  }

  toggleLanguage() {
    this.changeLanguageEvent.emit('');
  }

  showLanguageOption() {
    this.isLanguageOptionsHide = !this.isLanguageOptionsHide;
  }
}
