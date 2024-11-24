import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoginService } from './login.service';
// import { MessageService } from 'primeng/api';
// import { TokenRequestOutput } from 'src/app/models/apis/outputs/token-request.output';
// import { UserInfoOutput } from 'src/app/models/UserInfoOutput';
// import { PrimengToastService } from 'src/app/shared/services/primeng-toast.service';
// import { CacheParams } from 'src/app/models/enums';
// import { SpinerComponent } from 'src/app/shared/components/spiner/spiner.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    CommonModule,
    TranslateModule,
    // SpinerComponent,
    ToastModule,
  ],
  // providers: [PrimengToastService],
})
export class LoginComponent {
  usernameValue = '';
  passwordValue = '';
  showPwd = true;
  isLoginLoading: boolean = false;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChild('usernameInput') usernameInput!: ElementRef;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) // private toastService: PrimengToastService,
  // private messageService: MessageService
  {}

  login() {
    if (this.usernameValue && this.passwordValue && !this.isLoginLoading) {
      this.isLoginLoading = true;
      this.getTokenRequest(this.usernameValue, this.passwordValue);
    }
  }

  private getTokenRequest(username: string, password: string) {
    this.loginService.getTokenRequest(username, password).subscribe({
      next: (tokenRequestOutput: any) => {
        if (tokenRequestOutput.userInfo && tokenRequestOutput.userInfo.token) {
          this.loginSuccess(tokenRequestOutput.userInfo);
        } else {
          this.loginFailed('TokenNotFound', false);
        }
      },
      error: (error) => {
        this.loginFailed(error, true);
      },
    });
  }

  private loginSuccess(userInfo: any) {
    this.loginService.setUserInfoStorage(userInfo, this.passwordValue);
    // sessionStorage.setItem('email', 'email as string');
    // localStorage.setItem(CacheParams.token, userInfo.token);
    // this.toastService.showToast(
    //   'success',
    //   'SuccessToastTitle',
    //   'LoginSuccess',
    //   false
    // );
    this.router.navigate(['']);
  }

  private loginFailed(error: string, skipTranslation: boolean) {
    this.isLoginLoading = false;
    this.usernameValue = '';
    this.passwordValue = '';
    // this.toastService.showToast(
    //   'error',
    //   'ErrorToastTitle',
    //   error,
    //   skipTranslation
    // );
    setTimeout(() => {
      this.usernameInput?.nativeElement.focus();
    });
  }

  onUserNameEnter() {
    this.usernameValue ? this.passwordInput?.nativeElement.focus() : false;
  }
}
