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
//test();

// 3 3

// ex2
console.log(`
JavaScript 数据类型
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
引用数据类型：对象(Object)、数组(Array)、函数(Function)。
`);
