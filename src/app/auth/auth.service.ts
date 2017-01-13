import { Injectable } from "@angular/core";
import { Routes, RouterModule, CanActivate, Router } from "@angular/router";

import { ApiService } from "../api.service";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService implements CanActivate {

  public authenticated: boolean = false;
  public user: Object;

    constructor(
      private apiService: ApiService,
      private router: Router
        ) {}

    //Login
    authenticate(path: String, creds: Object) { }

    //Logout
    deauthenticate() { }

    canActivate(): boolean {
      if (!this.authenticated) {
          this.router.navigate(["home"]);
      }
      return this.authenticated;
    }
  }
