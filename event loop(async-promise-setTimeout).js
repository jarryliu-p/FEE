function a() {
    console.log(1);
    setTimeout(function () {
        console.log(2);
    })
    new Promise(function (resolve, reject) {
        console.log(3);
    }).then(
        console.log(4)
    );
    console.log(10);
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(5);
        });
    }).then(
        console.log(6)
    );
    setTimeout(function () {
        new Promise(function (resolve, reject) {
            console.log(7);
        });
    })
}

function a1() {
    console.log(1);
    setTimeout(function () {
        console.log(2);
    })
    new Promise(function (resolve) {
        console.log(3);
        resolve();
    }).then(function () {
        console.log(4);
    });
    console.log(10);
    new Promise(function (resolve) {
        setTimeout(function () {
            console.log(5);
        });
        resolve();
    }).then(function () {
        console.log(6)
    });
    setTimeout(function () {
        new Promise(function (resolve) {
            console.log(7);
        });
    })
}

function b() {
    async function async1() {
        console.log("async1 start");
        await async2();
        console.log("async1 end");

    }
    async function async2() {
        console.log('async2');
    }
    console.log("script start");
    setTimeout(function () {
        console.log("settimeout");
    }, 0);
    async1();
    new Promise(function (resolve) {
        console.log("promise1");
        resolve();
    }).then(function () {
        console.log("promise2");
    });
    console.log('script end');
}

function c() {
    console.log('1');
    setTimeout(function () {
        console.log('2');
        process.nextTick(function () {
            console.log('3');
        })
        new Promise(function (resolve) {
            console.log('4');
            resolve();
        }).then(function () {
            console.log('5')
        })
    })
    process.nextTick(function () {
        console.log('6');
    })
    new Promise(function (resolve) {
        console.log('7');
        resolve();
    }).then(function () {
        console.log('8')
    })
    setTimeout(function () {
        console.log('9');
        process.nextTick(function () {
            console.log('10');
        })
        new Promise(function (resolve) {
            console.log('11');
            resolve();
        }).then(function () {
            console.log('12')
        })
    })
}

// C E D (undefined) A B
function d() {
    setTimeout(() => {
        console.log('A');
    }, 0);
    var obj = {
        func: function () {
            setTimeout(function () {
                console.log('B');
            }, 0);
            return new Promise(function (resolve) {
                console.log('C');
                resolve();
            });
        },
    };
    obj.func().then(function () {
        console.log('D');
    });
    console.log('E');
}

//4 3 2 1 undefined
function e() {
    new Promise(resolve => {
        resolve(1);
        Promise.resolve().then(() => console.log(2));
        console.log(4);
    }).then(t => console.log(t));
    console.log(3);
}
e()
/**
 * macro-task(宏任务)：script(整体代码)、setTimeout、setInterval、I/O、事件、postMessage、 MessageChannel、setImmediate (Node.js)
 * micro-task(微任务)：Promise、MutaionObserver、process.nextTicks
 * promise.Trick() > promise的回调 > setTimeout > setImmediate
 */

/*
我们知道，async/await 仅仅是生成器的语法糖，所以不要怕，只要把它转换成 Promise 的形式即可。下面这段代码是 async/await 函数的经典形式。
async function foo() {
 // await 前面的代码
 await bar();
 // await 后面的代码
}

async function bar() {
 // do something...
}

foo();
复制代码其中 await 前面的代码 是同步的，调用此函数时会直接执行；而 await bar(); 这句可以被转换成 Promise.resolve(bar())；await 后面的代码 则会被放到 Promise 的 then() 方法里。因此上面的代码可以被转换成如下形式，这样是不是就很清晰了？
function foo() {
 // await 前面的代码
 Promise.resolve(bar()).then(() => {
   // await 后面的代码
 });
}

function bar() {
 // do something...
}

foo();
 */