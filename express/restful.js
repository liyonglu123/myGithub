/**
 * 基于 REST 架构的 Web Services 即是 RESTful。
 * REST 通常使用 JSON 数据格式。
 * HTTP 方法
 以下为 REST 基本架构的四个方法：
 GET - 用于获取数据。
 PUT - 用于更新或添加数据。
 DELETE - 用于删除数据。
 POST - 用于添加数据。
 序号	 URI	HTTP 方法	发送内容	    结果
 1	listUsers	GET	         空	          显示所有用户列表
 2	addUser	    POST	    JSON 字符串	  添加新用户
 3	deleteUser	DELETE	    JSON 字符串   删除用户
 4	:id	        GET	        空	          显示用户详细信息
 */

var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}

// 读取所有的用户的信息
app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})
// 添加用户
app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// 显示用户详情
app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

// 删除用户信息  用户的信息不展示

app.get('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 1];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})


