//ex1
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}

//ex2
new Promise(function(resolve, reject){
    console.log(1);
    resolve()
}).then(function(){
    console.log(2);
})
console.log(3)