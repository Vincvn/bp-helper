Object.prototype.getJSON = function(){
    try {
        return JSON.stringify(this)
    }catch (e) {
        return false
    }
}
Object.prototype.getClone = function(){
    try {
        return JSON.parse(JSON.stringify(this))
    }catch (e) {
        return Object.assign({},this)
    }
}
