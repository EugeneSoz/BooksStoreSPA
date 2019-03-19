﻿import { Component, OnInit } from "@angular/core";
import { DataOptionsService } from "../../services/dataOptions.service";
import { MigrationsOptions } from "../../models/dataDTO/migrationsOptions";

@Component({
    selector: 'services',
    templateUrl: './dbServices.component.html',
})
export class DbServicesComponent implements OnInit {
    constructor(
        private _dataOptionsService: DataOptionsService) {
    }

    get model(): MigrationsOptions {
        return this._dataOptionsService.migrationsOptions;
    }

    get infoMessageVisible(): boolean {
        if (this._dataOptionsService.infoMessage == undefined
            || this._dataOptionsService.infoMessage == null
            || this._dataOptionsService.infoMessage.trim() == "") {
            return false;
        }
        return true;
    }

    get contextName(): string {
        return this._dataOptionsService.contextName;
    }

    get migrationName(): string {
        return this._dataOptionsService.migrationName;
    }

    ngOnInit() {
        this._dataOptionsService.getDbservices();
    }

    onChangeContext(context: string): void {
        this._dataOptionsService.contextName = String(context);
    }

    onChangeMigration(migration: string): void {
        this._dataOptionsService.migrationName = String(migration);
    }

    onSeedDatabase(): void {
        this._dataOptionsService.seedDatabase(false);

    }
}
