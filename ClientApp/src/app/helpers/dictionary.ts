export class Dictionary<T> {
    private _items: { [index: string]: T } = {};

    private _count: number = 0;

    containsKey(key: string): boolean {
        return this._items.hasOwnProperty(key);
    }

    count(): number {
        return this._count;
    }

    add(key: string, value: T) {
        if (!this._items.hasOwnProperty(key))
            this._count++;

        this._items[key] = value;
    }

    remove(key: string): T {
        let val = this._items[key];
        delete this._items[key];
        this._count--;
        return val;
    }

    item(key: string): T {
        return this._items[key];
    }

    keys(): string[] {
        return Object.keys(this._items);
    }

    values(): Array<T> {
        return Object.values(this._items);
    }
}