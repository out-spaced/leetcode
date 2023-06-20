interface Entry {
    value: number,
    expiration: number,
}

interface Cache {
    [key: number] : Entry,
}

class TimeLimitedCache {

    _cache: Cache;
    
    constructor() {
        this._cache = {} as Cache;
    }

    set(key: number, value: number, duration: number): boolean {
        let keyExists : boolean = false;
        if (this._cache[key] && !TimeLimitedCache.isExpired(this._cache[key])) {
            keyExists = true;
        }
        this._cache[key] = {
            value,
            expiration: Date.now() + duration,
        };
        return keyExists;
    }

    get(key: number): number {
        const entry : Entry = this._cache[key];
        if (!entry || TimeLimitedCache.isExpired(entry)) return -1;
        return entry.value;
    }

	count(): number {
        let count : number = 0;
        Object.keys(this._cache).forEach(key => {
            if (!TimeLimitedCache.isExpired(this._cache[key])) {
                count += 1;
            };
        })
        return count;
    }

    protected static isExpired(entry: Entry): boolean {
        return Date.now() > entry.expiration;
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */