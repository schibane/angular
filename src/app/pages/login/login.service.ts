import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { TokenRequestOutput } from 'src/app/models/apis/outputs/token-request.output';
import { TokenRequestInput } from 'src/app/models/apis/inputs/token-request.input';
import { AppConfigService } from 'src/app/shared/services/app.config.service';
import { CacheParamEnum } from 'src/app/models/enums/cache-param.enum';
import { UserInfoOutput } from 'src/app/models/UserInfoOutput';
import { HttpErrorService } from 'src/app/shared/services/http-error.service';
import { TokenValidationOutput } from 'src/app/models/apis/outputs/token-validation.output';
import { TokenValidationInput } from 'src/app/models/apis/inputs/token-validation.input';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = AppConfigService.settings.apiUrl;
  private deviceName =
    AppConfigService.settings.title +
    '_' +
    AppConfigService.settings.environmentAb;

  constructor(
    private http: HttpClient,
    private errorService: HttpErrorService
  ) {}

  getLocalStorageToken(): string {
    const userInfo = localStorage.getItem(CacheParamEnum.userInfo);
    return userInfo ? (JSON.parse(userInfo) as UserInfoOutput).token : '';
  }

  getTokenRequest(
    username: string,
    password: string
  ): Observable<TokenRequestOutput> {
    const url = `${this.baseUrl}jderest/tokenrequest`;
    const input = {} as TokenRequestInput;
    input.deviceName = this.deviceName;
    input.username = username;
    input.password = password;
    return this.http
      .post<TokenRequestOutput>(url, input)
      .pipe(catchError(this.errorService.handleError));
  }

  validateToken(token: string): Observable<TokenValidationOutput> {
    const url = `${this.baseUrl}jderest/v2/tokenrequest/validate`;
    const input = {} as TokenValidationInput;
    input.token = token;
    return this.http
      .post<TokenValidationOutput>(url, input)
      .pipe(catchError(this.errorService.handleError));
  }

  setUserInfoStorage(userInfo: UserInfoOutput, pwd: string) {
    userInfo.password = pwd;
    if (userInfo.langPref?.trim()?.toUpperCase() == 'F') {
      userInfo.langPref = 'fr';
    } else {
      userInfo.langPref = 'en';
    }
    localStorage.setItem(CacheParamEnum.userInfo, JSON.stringify(userInfo));
    localStorage.setItem(CacheParamEnum.currentLang, userInfo.langPref);
  }
}
