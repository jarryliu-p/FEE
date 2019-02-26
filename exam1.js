// ex1
var a = b = 1;
console.log(1, a);
console.log(2, b);
(function () {
    console.log(3, a);
    console.log(4, b);
    var a = b = 2;
    console.log(5, a)
    console.log(6, b)
})();
console.log(7, a)
console.log(8, b)

//ex2 
var name = 'Jarry';
(function () {
    console.log(name);
    if (typeof name === 'undefined') {
        var name = 'lisa';
        console.log('Goodbye' + name);
    } else {
        console.log('Hello' + name)
    }
})();

//ex3
console.log('5' + 3, typeof ('5' + 3));
console.log('5' - 3, typeof ('5' - 3));
console.log(5 + '3', typeof (5 + '3'));
console.log(5 - '3', typeof (5 - '3'));
console.log('3' + 5, typeof ('3' + 5));
console.log('3' - 5, typeof ('3' - 5));
console.log(3 + '5', typeof (3 + '5'));
console.log(3 - '5', typeof (3 - '5'));
console.log('5' - '3', typeof ('5' - '3'))
console.log('3' - '5', typeof ('3' - '5'))
console.log(5 + 3, typeof (5 + 3));

//ex4
(function () {
    var x = y = 1;
})();
//console.log(y);
//console.log(x);

//ex5
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, 1000);
}

//ex6
var str = 'aaa';
test();
function test() {
    console.log(str);
    var str = 'bbb';
    console.log(str);
}
console.log(str);

//ex7
function A() {
    this.name = 'a';
    this.color = ['green', 'yellow'];
}
function B() {

}
B.prototype = new A();
var b1 = new B();
var b2 = new B();
b1.name = 'change';
b1.color.push('black');
console.log(JSON.stringify(b1))
console.log(typeof b1.prototype)
console.log(b1.color)
console.log(JSON.stringify(b2))

//ex8 js实现千位分隔符
var a = 1234567894532;
var b = 673439.4542;
function numFormat1(num) {
    var res = num.toString().replace(/\d+/, function (n) { // 先提取整数部分
        return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
            return $1 + ",";
        });
    })
    return res;
}
function numFormat2(num) {
    num = num.toString().split(".");  // 分隔小数点
    var arr = num[0].split("").reverse();  // 转换成字符数组并且倒序排列
    var res = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (i % 3 === 0 && i !== 0) {
            res.push(",");   // 添加分隔符
        }
        res.push(arr[i]);
    }
    res.reverse(); // 再次倒序成为正确的顺序
    if (num[1]) {  // 如果有小数的话添加小数部分
        res = res.join("").concat("." + num[1]);
    } else {
        res = res.join("");
    }
    return res;
}
console.log(numFormat1(a)); // "1,234,567,894,532"
console.log(numFormat1(b)); // "673,439.4542"
console.log(numFormat2(a)); // "1,234,567,894,532"
console.log(numFormat2(b)); // "673,439.4542"
console.log(a.toLocaleString());  // "1,234,567,894,532"
console.log(b.toLocaleString());  // "673,439.454"  （小数部分四舍五入了）