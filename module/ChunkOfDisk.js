/**
 *ディスクの集合.
 */
class ChunkOfDisk {
    constructor(diskList) {
        diskList.sort(function(a, b) {
            return a.getSize() - b.getSize();
        });
        this.diskList = diskList;
    }
    getTopDisk() {
        return this.diskList[0];
    }
    getBottomDisk() {
        return this.diskList[this.diskList.length - 1];
    }
    getChunkWithoutBottom() {
        let diskList = this.diskList.slice(0, this.diskList.length - 1);
        return new ChunkOfDisk(diskList);
    }
    getLength() {
        return this.diskList.length;
    }
}
module.exports = ChunkOfDisk;