import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NameOfHelper {
    nameof<T>(key: keyof T, instance?: T): keyof T {
        return key;
    }
}
