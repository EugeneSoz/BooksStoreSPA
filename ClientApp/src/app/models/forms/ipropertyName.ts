export interface IPropertyName<T> {
    getPropertyName(key: keyof T): keyof T
}
