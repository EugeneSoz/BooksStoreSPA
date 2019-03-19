import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { HttpMethod } from "../enums/httpMethods";

@Injectable({ providedIn: 'root' })
export class RestDatasource {
    constructor(private _http: HttpClient) { }

    getResponseBody<T>(response: HttpResponse<T>, method: HttpMethod): T {
        let result: T = null;
        switch (method) {
            case HttpMethod.GET:
                result = response.status == 200
                    ? response.body
                    : null;
                break;
        }

        return result;
    }

    getBoolResponseBody(response: HttpResponse<null>, method: HttpMethod): boolean {
        let boolResult: boolean = null;
        switch (method) {
            case HttpMethod.DELETE:
                boolResult = response.status == 204
                    ? true
                    : false;
                break;
        }

        return boolResult;
    }

    getAll<TReturnValue>(url: string): Observable<HttpResponse<TReturnValue>> {
        let result: Observable<HttpResponse<TReturnValue>> =
            this.sendRequest<TReturnValue, boolean>("get", url);

        return result;
    }

    //вспомогательный метод для сериализации объекта и отправки его на сервер
    private sendRequest<TReturnValue, TParameter>(verb: string,
        url: string, body?: TParameter): Observable<HttpResponse<TReturnValue>> {
        return this._http.request<TReturnValue>(verb, url, { body, observe: "response" });
    }
}
