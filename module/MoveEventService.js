// require
let modulePath = "./";
let MoveEvent = require(`${modulePath}/MoveEvent.js`);
let MoveEventRepository = require(`${modulePath}/MoveEventRepository.js`);
let RodRepository = require(`${modulePath}/RodRepository.js`);

/**
 *移動サービス.
 */
class MoveEventService {
    /**
     * 円盤の塊を移動.
     * @param chunkOfDisk 移動対象の円盤の塊
     * @param destiny 移動先の軸
     * @param specification 移動ルールの仕様
     */
    static moveChunk(chunkOfDisk, destiny, specification) {
        let chunkLength = chunkOfDisk.getLength();
        switch (chunkLength) {
            case 0:
                return;
            case 1:
                this.moveDisk(chunkOfDisk.getTopDisk(), destiny, specification);
                return;
            default:
        }
        // move chunk without bottom -> spare rod
        let top = chunkOfDisk.getTopDisk();
        let source = MoveEventRepository.getPositionOf(top);
        let spare = RodRepository.getOther(source, destiny);
        let chunkWithoutBottom = chunkOfDisk.getChunkWithoutBottom();
        this.moveChunk(chunkWithoutBottom, spare, specification);
        // bottom -> destiny
        let bottom = chunkOfDisk.getBottomDisk();
        this.moveDisk(bottom, destiny, specification);
        // move chunk without bottom -> destiny
        this.moveChunk(chunkWithoutBottom, destiny, specification);
    }
    /**
     * 円盤を単体で移動.
     * @param disk ターゲットの円盤
     * @param destiny 移動先の軸
     * @param specification 移動ルールの仕様
     */
    static moveDisk(disk, destiny, specification) {
        if (specification) {
            specification.validate(disk, destiny);
        }
        let m = new MoveEvent(disk, destiny);
        MoveEventRepository.save(m);
    }
}

module.exports = MoveEventService;