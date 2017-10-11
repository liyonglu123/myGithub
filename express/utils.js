/**
 * util.inherits
 util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
 JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。
 JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。
 */

// var util = require('util');
// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function() {
//         console.log('Hello ' + this.name);
//     };
// }
// Base.prototype.showName = function() {
//     console.log(this.name);
// };
// function Sub() {
//     this.name = 'sub';
// }
// // 实现继承
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// //objSub.sayHello();
// console.log(objSub);

/**
 * util.inspect
 util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
 showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
 depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。 如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
 特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了toString 方法也不会调用。
 */
// var util = require('util');
// function Person() {
//     this.name = 'byvoid';
//     this.toString = function() {
//         return this.name;
//     };
// }
// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));

/**
 *util.isArray(object)
 如果给定的参数 "object" 是一个数组返回true，否则返回false。
 util.isRegExp(object)
 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
 util.isDate(object)
 如果给定的参数 "object" 是一个日期返回true，否则返回false。
 util.isError(object)
 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
 */
