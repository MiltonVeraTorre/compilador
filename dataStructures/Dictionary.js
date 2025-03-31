export class Dictionary {
    constructor() {
        this.items = {};
        this.keys = [];
    }
    set(key, value) {
        if (!this.has(key)) {
            this.keys.push(key);
        }
        this.items[key] = value;
    }
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }
    has(key) {
        return Object.prototype.hasOwnProperty.call(this.items, key);
    }
    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            this.keys = this.keys.filter(k => k !== key);
            return true;
        }
        return false;
    }
    clear() {
        this.items = {};
        this.keys = [];
    }
    size() {
        return this.keys.length;
    }
    keysList() {
        return [...this.keys];
    }
    valuesList() {
        return this.keys.map(key => this.items[key]);
    }
    entries() {
        return this.keys.map(key => [key, this.items[key]]);
    }
}
