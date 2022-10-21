const fs = require ('fs');
const write = function(data="Nothing") {
    fs.writeFileSync('note.txt', data);
}
module.exports=write