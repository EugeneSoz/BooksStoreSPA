String.prototype.isNullOrEmpty = function () {
    if (this == undefined || this == null || this.trim() == "") {
        return true;
    }
    return false;
};
Array.prototype.any = function () {
    return this.length > 0 ? true : false;
};
//# sourceMappingURL=methods.js.map