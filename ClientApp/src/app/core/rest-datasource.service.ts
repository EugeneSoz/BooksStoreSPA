import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { HttpMethod } from '../models/http-method.model';
import { HttpStatusCode } from '../models/enums/http-status-code.enum';
import { Login } from '../models/login.model';


@Injectable({ providedIn: 'root' })
export class RestDatasource {
    constructor(
        private _http: HttpClient) { }

    private _errors: Array<string> = null;

    getOne<TResponse>(url: string): Observable<TResponse> {
        let entity$ = this.sendRequest<TResponse, {}>(HttpMethod.get, url)
            .pipe(
                map((response: HttpResponse<TResponse>) =>
                    this.getResult<TResponse>(response, HttpMethod.get)));

        return entity$;
    }

    getAll<TResponse>(url: string): Observable<TResponse> {
        let entities$ = this.sendRequest<TResponse, {}>(HttpMethod.get, url)
            .pipe(
                map((response: HttpResponse<TResponse>) =>
                    this.getResult<TResponse>(response, HttpMethod.get)));

        return entities$;
    }

    receiveAll<TResponse, TBody>(url: string, parameter: TBody): Observable<TResponse> {
        let entities$ = this.sendRequest<TResponse, TBody>(HttpMethod.post, url, parameter)
            .pipe(
                map((response: HttpResponse<TResponse>) =>
                    this.getResult<TResponse>(response, HttpMethod.post)));

        return entities$;
    }

    create<TBody>(url: string, parameter: TBody): Observable<boolean> {
        let entities$ = this.sendRequest<{}, TBody>(HttpMethod.post, url, parameter)
            .pipe(
                map((response: HttpResponse<{}>) =>
                    this.getBoolResult(response, HttpMethod.post)));

        return entities$;
    }

    update<TBody>(url: string, parameter: TBody): Observable<boolean> {
        let entities$ = this.sendRequest<{}, TBody>(HttpMethod.put, url, parameter)
            .pipe(
                map((response: HttpResponse<{}>) =>
                    this.getBoolResult(response, HttpMethod.put)));

        return entities$;
    }

    delete<TBody>(url: string, parameter: TBody): Observable<boolean> {
        let entities$ = this.sendRequest<{}, TBody>(HttpMethod.delete, url, parameter)
            .pipe(
                map((response: HttpResponse<{}>) =>
                    this.getBoolResult(response, HttpMethod.delete)));

        return entities$;
    }

    login(userLogin: Login, url: string): Observable<HttpResponse<{}>> {
        let result$ = this.sendRequest<{}, Login>(HttpMethod.post, url, userLogin);

        return result$;
    }

    private getResult<TBody>(response: HttpResponse<TBody>, method: HttpMethod): TBody {
        let result: TBody = null;
        switch (method) {
            case HttpMethod.get:
            case HttpMethod.post:
                result = response.status == HttpStatusCode.OK
                    ? response.body
                    : null;
                break;
        }

        return result;
    }

    private getBoolResult(response: HttpResponse<{}>, method: HttpMethod): boolean {
        let boolResult: boolean = null;
        switch (method) {
            case HttpMethod.post:
                boolResult = response.status == HttpStatusCode.Created
                    ? true
                    : false;
                break;
            case HttpMethod.put:
                boolResult = response.status == HttpStatusCode.OK
                    ? true
                    : false;
                break;
            case HttpMethod.delete:
                boolResult = response.status == HttpStatusCode.NoContent
                    ? true
                    : false;
                break;
        }

        return boolResult;
    }

    //вспомогательный метод для сериализации объекта и отправки его на сервер
    private sendRequest<TResponse, TBody>(verb: string,
        url: string, body?: TBody): Observable<HttpResponse<TResponse>> {
        return this._http.request<TResponse>(verb, url, { body, observe: "response" })
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Произошла ошибка:', error.error.message);
        }
        else {
            this._errors = <string[]>error.error
        }
        // return an observable with a user-facing error message
        return throwError(
            this._errors);
    };
}
