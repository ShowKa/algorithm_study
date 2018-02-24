// require
let modulePath = "./module";
let Disk = require(`${modulePath}/Disk.js`);
let ChunkOfDisk = require(`${modulePath}/ChunkOfDisk.js`);
let MoveEventService = require(`${modulePath}/MoveEventService.js`);
let MoveEventSpecification = require(`${modulePath}/MoveEventSpecification.js`);
let MoveEventRepository = require(`${modulePath}/MoveEventRepository.js`);
let Rod = require(`${modulePath}/Rod.js`);
let RodRepository = require(`${modulePath}/RodRepository.js`);

// size 
let size = 5;

// rod
let s1 = new Rod("S1");
let m2 = new Rod("M2");
let d3 = new Rod("D3");
RodRepository.save(s1, m2, d3);

// disks
let disks = [];
for (let i = size; i > 0; i--) {
    let d = new Disk(i);
    disks.push(d);
    // setup
    MoveEventService.moveDisk(d, s1);
}

// chunk of disks
let chunk = new ChunkOfDisk(disks);

// start
console.log("start: S1 has....");
let start = MoveEventRepository.getAllDiskOf(s1);
console.log(start);

// do
MoveEventService.moveChunk(chunk, d3, MoveEventSpecification);

// end
console.log("end: D3 has....");
let end = MoveEventRepository.getAllDiskOf(d3);
console.log(end);
let events = MoveEventRepository.getAll();
console.log("events....")
events.forEach(function(_e) {
    console.log(_e.toString());
});