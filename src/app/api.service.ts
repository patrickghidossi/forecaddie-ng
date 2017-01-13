import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ApiService {

  postHeaders: Headers = new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
    });

    getHeaders: Headers = new Headers({
        "Accept": "application/json"
    });

    // Change when move to prod
    url: string = "http://localhost:4200";
}
