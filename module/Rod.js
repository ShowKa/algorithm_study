/**
 * 軸.
 */
class Rod {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    equals(other) {
        return this.name === other.getName();
    }
}

module.exports = Rod;