/**
 * 移動イベント.
 */
let i = 0;
class MoveEvent {
    constructor(disk, destiny) {
        this.disk = disk;
        this.destiny = destiny;
        this.count = ++i;
    }
    getDisk() {
        return this.disk;
    }
    getDestiny() {
        return this.destiny;
    }
    getCount() {
        return this.count;
    }
    toString() {
        return `@ disk: ${this.disk.getSize()}, destiny: ${this.destiny.getName()}, count: ${this.count}`;
    }
}

module.exports = MoveEvent;