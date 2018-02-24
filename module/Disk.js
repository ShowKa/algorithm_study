/**
 * 円盤
 */
class Disk {
    constructor(size) {
        this.size = size;
    }
    getSize() {
        return this.size;
    }
    smallerThan(other) {
        return this.size < other.getSize();
    }
    equals(other) {
        return this.size === other.getSize();
    }
}

module.exports = Disk;