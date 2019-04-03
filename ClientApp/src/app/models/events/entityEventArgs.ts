import { InjectionToken } from '@angular/core';

export class EntityEventArgs {
    constructor(public entityChanged: boolean) {}
}

export const Entity_Changed = new InjectionToken("");
