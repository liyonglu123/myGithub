/**
 * Node 提供了 child_process 模块来创建子进程，方法有：
 exec - child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
 spawn - child_process.spawn 使用指定的命令行参数创建新进程。
 fork - child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块，
 如 fork('./son.js') 相当于 spawn('node', ['./son.js']) 。与spawn方法不同的是，
 fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。

 exec() 方法
 child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
 详细内容见
 http://www.runoob.com/nodejs/nodejs-process.html
 */

