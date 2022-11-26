import decimal from "decimal.js"

String.prototype.doRandomMask = function(mask= '#', fake_list = []){
    let new_string = []
    for(let i=0;i<this.length;i++){
        new_string.push(this[i] === mask ? fake_list.random():this[i])
    }
    return new_string.join("")
}
String.prototype.getFrom = function(size){return this.slice(0,size||1)}
String.prototype.getLast = function(size){return this.slice(size ? -size:-1)}
String.prototype.isContain = function(s = []){
    if(!Array.isArray(s)) throw Error("Invalid data")
    for(let i=0;i<s.length;i++){
        if(this.search(s[i]) > -1) return true
    }
    return false
}
String.prototype.toNumber = function(){
    if(this.isNaN()) return 0
    return new decimal(this.replace(/[,\+\s]/gi, "")).toNumber()
}
String.prototype.leadingChars = function (chars, length){
    return (chars.toString().repeat(length) + this).getLast(length)
}
String.prototype.hideChars = function (chars, show){
    if(show >= this.length) return this
    return (this.getFrom(show) + chars.toString().repeat(this.length-show))
}
String.prototype.maskChars = function (chars, length){
    if(length <= this.length) return chars.toString().repeat(this.length)
    return (this + chars.toString().repeat(length-this.length))
}
String.prototype.toJSON = function(){
    return JSON.parse(this)
}
String.prototype.getChar = function(index){
    return this.slice(index, index + 1)
}
String.prototype.getStr = function (sub1,sub2) {
    if(this.indexOf(sub1) < 0 || this.indexOf(sub2) < 0) return false
    const SP = this.indexOf(sub1)+sub1.length
    const string1 = this.slice(0,SP)
    const string2 = this.slice(SP)
    const TP = string1.length + string2.indexOf(sub2)
    return this.substring(SP,TP)
}
String.prototype.isNaN = function(){
    return new decimal(Number(this)).isNaN()
}