//全局对象与全局变量
//global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
//在最外层定义的变量；
//全局对象的属性；
//隐式定义的变量（未定义直接赋值的变量）
// 输出全局变量 __filename 的值
// console.log( __filename );
//
// // 输出全局变量 __dirname 的值
// console.log( __dirname );

/*
setTimeout(cb, ms)
setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
返回一个代表定时器的句柄值。
*/

// function printHello(){
//     console.log( "Hello, World!");
// }
// // 两秒后执行以上函数
// setTimeout(printHello, 2000);

/**
 * clearTimeout(t)
 clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
 */
function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);

/**
 * setInterval(cb, ms)
 setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
 返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
 setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
 */
// function printHello(){
//     console.log( "Hello, World!");
// }
// // 两秒后执行以上函数
// setInterval(printHello, 2000);

// ===console 类似于 js中的console

// console.info("程序开始执行：");
//
// var counter = 10;
// console.log("计数: %d", counter);
//
// console.time("获取数据");
// //
// // 执行一些代码
// //
// console.timeEnd('获取数据');
//
// console.info("程序执行完毕。")

/**
 * process
 process 是一个全局变量，即 global 对象的属性。
 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。
 通常在你写本地命令行程序的时候，少不了要 和它打交道。
 下面将会介绍 process 对象的一些最常用的成员方法。
 */
// process.on('exit', function(code) {
//
//     // 以下代码永远不会执行
//     setTimeout(function() {
//         console.log("该代码不会执行");
//     }, 0);
//
//     console.log('退出码为:', code);
// });
// console.log("程序执行结束");