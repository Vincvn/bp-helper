Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}
Array.prototype.skip = function (count) {
    return this.slice(count, this.length)
}
Array.prototype.take = function (count) {
return this.slice(0, count)
}
Array.prototype.count = function (where=null) {
    if (!where) where = (item) => item
    return this.filter(where).length
}
Array.prototype.max = function (where = null) {
    if (where == null) where = (item) => item
    return this.map(where).reduce((a, b) => {
        return a > b ? a : b
    })
}
Array.prototype.max = function (where = null) {
    if (where == null) where = (item) => item
    return this.map(where).reduce((a, b) => {
        return a < b ? a : b
    })
}
Array.prototype.sum = function (where = null) {
    if (where == null) where = (item) => item
    return this.map(where).reduce((a, b) => {
        return a + b;
    }, 0)
}
Array.prototype.empty = function(){
    return this == null || this.length === 0
}
Array.prototype.first = function($d= null){
    return this.empty() ? $d:this[0]
}
Array.prototype.last = function($d= null){
    return this.empty() ? $d:this[this.length-1]
}
Array.prototype.clone = function($d = null){
    return this.empty() ? $d:JSON.parse(JSON.stringify(this))
}
Array.prototype.toJSON = function(){
    return JSON.stringify(this)
}
