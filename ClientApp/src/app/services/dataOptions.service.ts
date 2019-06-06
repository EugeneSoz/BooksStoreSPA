import { Injectable } from "@angular/core";

import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';
import { MigrationsOptions } from '../data/DTO/migrationsOptions';

@Injectable()
export class DataOptionsService {
    constructor(
        private _urls: Urls,
        private _rest: RestDatasource) { }

    migrationsOptions: MigrationsOptions = new MigrationsOptions();
    contextName: string = "";
    migrationName: string = "";
    infoMessage: string = "";

    getDbservices(): void {
        this._rest.getAll<MigrationsOptions>(this._urls.dataOptions)
            .subscribe(result => this.processDataOptionsResult(result, true));
    }

    applyMigrations(): void {
        this._rest.getAll<MigrationsOptions>(`${this._urls.options_apply}/${this.contextName}/${this.migrationName}`)
            .subscribe(result => this.processDataOptionsResult(result, true));
    }

    seedDatabase(fromFile: boolean): void {
        let url: string = `${this._urls.options_seed}/${this.contextName}/${fromFile}`;
        this._rest.getAll<string>(url)
            .subscribe(result => this.infoMessage = result);
    }

    saveData(): void {
        this._rest.getAll<string>(this._urls.options_save)
            .subscribe(result => this.infoMessage = result);
    }

    clearDatabase(): void {
        this._rest.getAll<string>(`${this._urls.options_clear}/${this.contextName}`)
            .subscribe(result => this.infoMessage = result);
    }

    chooseContext(): void {
        this._rest.getAll<MigrationsOptions>(`${this._urls.options_context}/${this.contextName}`)
            .subscribe(result => this.processDataOptionsResult(result, false));
    }

    private processDataOptionsResult(result: MigrationsOptions, initializeContext: boolean): void {
        this.migrationsOptions = result;

        if (initializeContext) {
            this.contextName = this.migrationsOptions.contextNames[0];
        }

        let index: number = this.migrationsOptions.allMigrations.length - 1;
        this.migrationName = this.migrationsOptions.allMigrations[index];
        this.infoMessage = this.migrationsOptions.infoMessage;
    }
}
