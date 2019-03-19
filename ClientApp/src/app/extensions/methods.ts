interface String {
    isNullOrEmpty(this: String): boolean;
}

interface Array<T> {
    any(this: Array<T>): boolean;
}

String.prototype.isNullOrEmpty = function (this: string) {
    if (this == undefined || this == null || this.trim() == "") {
        return true;
    }
    return false;
}

Array.prototype.any = function<T> (this: Array<T>) {
    return this.length > 0 ? true : false;
};