// 模块系统
// var hello = require('./hello');
// hello.world();

//  使用module模块
var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();