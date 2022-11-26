import './index.js'
test('leadingChars',()=>{
    console.log("hello world".leadingChars('#','20'));
})
test('hideChars',()=>{
    console.log("this is".hideChars('#','4'));
})
test('maskChars',()=>{
    console.log("".maskChars('#','6'));
})