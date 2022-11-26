import decimal from 'decimal.js'
Number.prototype.add = function(value){
    return decimal.add(Number(this), value).toNumber()
}
Number.prototype.sub = function(value){
    return decimal.sub(Number(this), value).toNumber()
}
Number.prototype.div = function(value){
    return decimal.div(Number(this), value).toNumber()
}
Number.prototype.mul = function(value){
    return decimal.mul(Number(this), value).toNumber()
}
Number.prototype.toPer = function(val){
    return (val / Number(this)) * 100;
}
Number.prototype.fromPer = function(per){
    return (Number(this) / 100) * per;
}
Number.prototype.ceil = function(fixed=0) {
    return Math.ceil(Number(this)).toFixed(fixed)*1
}
Number.prototype.floor = function(fixed=0) {
    return Math.floor(Number(this)).toFixed(fixed)*1
}
Number.prototype.round = function(fixed=0) {
    return Math.round(Number(this)).toFixed(fixed)*1
}