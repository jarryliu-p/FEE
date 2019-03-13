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

a1();

/**
 * macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
 * micro-task(微任务)：Promise，process.nextTick
 * promise.Trick() > promise的回调 > setTimeout > setImmediate
 */