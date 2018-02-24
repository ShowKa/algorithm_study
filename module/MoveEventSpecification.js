// require
let modulePath = "./";
let MoveEventRepository = require(`${modulePath}/MoveEventRepository.js`);

/**
 *　移動イベントの仕様.
 */
class MoveEventSpecification {
    /**
     * 大きい円盤を小さい円盤の上に置くとエラー. 
     */
    static validate(targetDisk, destinyRod) {
        let disks = MoveEventRepository.getAllDiskOf(destinyRod);
        disks.forEach((d) => {
            if (!targetDisk.smallerThan(d)) {
                let t = targetDisk.getSize();
                let o = d.getSize();
                throw new Error(`targetDiskより小さなDiskが存在します。ターゲットサイズ: ${t}, 相手: ${o}`);
            }
        });
    }
}

module.exports = MoveEventSpecification;