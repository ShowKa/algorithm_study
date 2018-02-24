/**
 * 移動イベント倉庫.
 */
let _repo = [];
class MoveEventRepository {
    static save(moveEvent) {
        if (_repo.length > 0) {
            let newest = _repo[_repo.length - 1];
            if (moveEvent.getCount() <= newest.getCount()) {
                throw new Error(`MoveEventは登録済みです: ${moveEvent}`);
            }
        }
        _repo.push(moveEvent);
    }
    static getAll() {
        return _repo;
    }
    static getAllDiskOf(rod) {
        let list = [];
        for (let _e of _repo) {
            let _dis = _e.getDisk();
            let _des = _e.getDestiny();
            if (_des.equals(rod)) {
                if (!list.includes(_dis)) {
                    list.push(_dis);
                }
            } else {
                if (list.includes(_dis)) {
                    let index = list.indexOf(_dis);
                    list.splice(index, 1);
                }
            }
        }
        return list;
    }
    static getTopDiskOf(rod) {
        let answer = null;
        for (let _e of _repo) {
            let _dis = _e.getDisk();
            let _des = _e.getDestiny();
            if (_des.equals(rod)) {
                answer = _dis;
            }
        }
        return answer;
    }
    static getPositionOf(disk) {
        let answer = null;
        for (let _e of _repo) {
            let _dis = _e.getDisk();
            let _des = _e.getDestiny();
            if (_dis.equals(disk)) {
                answer = _des;
            }
        }
        return answer;
    }
}

module.exports = MoveEventRepository;