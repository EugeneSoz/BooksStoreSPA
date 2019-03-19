import { Injectable } from "@angular/core";
import { Urls } from '../helpers/urls';
import { MigrationsOptions } from '../models/dataDTO/migrationsOptions';
import { RestDatasource } from '../helpers/restDatasource';
import { HttpMethod } from "../enums/httpMethods";

@Injectable({ providedIn: 'root' })
export class DataOptionsService {
    constructor(
        private _urls: Urls,
        private _rest: RestDatasource) { }

    migrationsOptions: MigrationsOptions = new MigrationsOptions();
    contextName: string = "";
    migrationName: string = "";
    infoMessage: string = "";

    getDbservices(): void {
        this._rest.getAll<MigrationsOptions>(this._urls.dataOptions).subscribe(response => {
            this.migrationsOptions = this._rest.getResponseBody(response, HttpMethod.GET);
            this.contextName = this.migrationsOptions.contextNames[0];

            let index: number = this.migrationsOptions.allMigrations.length - 1;
            this.migrationName = this.migrationsOptions.allMigrations[index];
            this.infoMessage = this.migrationsOptions.infoMessage;
        });
    }

    seedDatabase(fromFile: boolean): void {
        this._rest.getAll<string>(`${this._urls.seed}/${this.contextName}/${fromFile}`)
            .subscribe(response => {
            this.infoMessage = this._rest.getResponseBody(response, HttpMethod.GET);
        });
    }
}
