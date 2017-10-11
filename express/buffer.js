// 类似于数组的问题
// 创建 Buffer 类
// 创建长度为 10 字节的 Buffer 实例：
// var buf = new Buffer(10);
// 通过给定的数组创建 Buffer 实例：
// var buf = new Buffer([10, 20, 30, 40, 50]);
// 通过一个字符串来创建 Buffer 实例：
// var buf = new Buffer("www.runoob.com", "utf-8");
// 写入node 的缓冲区
// buf.write(string[, offset[, length]][, encoding])
/**
 * string 写入的缓冲区的字符串
 * offset 缓冲区开始写入的索引值，默认为 0 。
 * length 写入的字节数，默认为 buffer.length
 * encoding 使用的编码。默认为 'utf-8' 。
 */

// var buf = new Buffer(256);
// var len = buf.write("www.runoob.com");
// console.log("写入字节数 : "+  len);

/**
 * ======从缓冲区读取数据
 * buf.toString([encoding[, start[, end]]])
 * encoding - 使用的编码。默认为 'utf8'
 * start - 指定开始读取的索引位置，默认为 0。
 * end - 结束位置，默认为缓冲区的末尾。
 */

// var buf1 = new Buffer(26);
// for (var i = 0 ; i < 26 ; i++) {
//     buf1[i] = i + 97;
// }
//
// console.log( buf1.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf1.toString('ascii',0,5));   // 输出: abcde
// console.log( buf1.toString('utf8',0,5));    // 输出: abcde
// console.log( buf1.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// -====将 Buffer 转换为 JSON 对象
/**
 * buf.toJSON()
 */
// var bufjson = new Buffer('www.runoob.com');
// var json = bufjson.toJSON(bufjson);
// console.log(json);

// 缓冲区合并
/**
 * Buffer.concat(list[, totalLength])
 * list - 用于合并的 Buffer 对象数组列表。
 * totalLength - 指定合并后Buffer对象的总长度。
 */

// var buffer1 = new Buffer('菜鸟教程 ');
// var buffer2 = new Buffer('www.runoob.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());

// 缓冲区比较
/**
 * buf.compare(otherBuffer);
 * otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
 */
// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer('ABCD');
// var result = buffer1.compare(buffer2);
//
// if(result < 0) {
//     console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
//     console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//     console.log(buffer1 + " 在 " + buffer2 + "之后");
// }
// 拷贝缓冲区
/**
 *buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
 * targetBuffer - 要拷贝的 Buffer 对象。
 * targetStart - 数字, 可选, 默认: 0
 * sourceStart - 数字, 可选, 默认: 0
 * sourceEnd - 数字, 可选, 默认: buffer.length
 */
// 缓冲区裁剪
/**
 * buf.slice([start[, end]])
 * start - 数字, 可选, 默认: 0
 * end - 数字, 可选, 默认: buffer.length
 */
// var buffer1 = new Buffer('runoob');
// // 剪切缓冲区
// var buffer2 = buffer1.slice(0,2);
// console.log("buffer2 content: " + buffer2.toString());
// 缓冲区的长度
/**
 * buf.length;
 */
var buffer = new Buffer('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);