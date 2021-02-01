function set(js){
for (var key in js ) if (!has(key)) process.env[key] = js[key]
}
function del (key) {delete process.env[key]}

function has (key) {
return process.env.hasOwnProperty(key)
}
function get (key) {
    return process.env[key]
}
module.exports = {get , has , del ,set}