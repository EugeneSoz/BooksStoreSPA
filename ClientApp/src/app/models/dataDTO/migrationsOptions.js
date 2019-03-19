"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MigrationsOptions = /** @class */ (function () {
    function MigrationsOptions(booksCount, categoriesCount, publishersCount, contextNames, appliedMigrations, pendingMigrations, allMigrations, infoMessage) {
        if (booksCount === void 0) { booksCount = 0; }
        if (categoriesCount === void 0) { categoriesCount = 0; }
        if (publishersCount === void 0) { publishersCount = 0; }
        if (contextNames === void 0) { contextNames = new Array(); }
        if (appliedMigrations === void 0) { appliedMigrations = new Array(); }
        if (pendingMigrations === void 0) { pendingMigrations = new Array(); }
        if (allMigrations === void 0) { allMigrations = new Array(); }
        if (infoMessage === void 0) { infoMessage = ""; }
        this.booksCount = booksCount;
        this.categoriesCount = categoriesCount;
        this.publishersCount = publishersCount;
        this.contextNames = contextNames;
        this.appliedMigrations = appliedMigrations;
        this.pendingMigrations = pendingMigrations;
        this.allMigrations = allMigrations;
        this.infoMessage = infoMessage;
    }
    return MigrationsOptions;
}());
exports.MigrationsOptions = MigrationsOptions;
//# sourceMappingURL=migrationsOptions.js.map