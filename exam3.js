// ex1
function test() {
    for (var i = 0; i < 3; i += 1) {
        var img = new Image();
        img.src = 'test' + i + '.png';
        img.onload = function () { 
            console.log(i);
        }
        document.body.appendChild(img);
    }
}
test();

// 3 3