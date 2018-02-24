/**
 * 3つの軸を保持するRepository.
 */
let _repo = [];
class RodRepository {
    static save(...rods) {
        _repo = _repo.concat(rods);
        if (_repo.length > 3) {
            throw new Error("ロッド数が3を超えました。 : " + _repo);
        }
    }
    static getAll() {
        return _repo;
    }
    static getOther(one, two) {
        let names = [one.getName(), two.getName()];
        for (let _r of _repo) {
            if (!names.includes(_r.getName())) {
                return _r;
            }
        }
    }
}

module.exports = RodRepository;