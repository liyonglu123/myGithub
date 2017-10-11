/**Express 框架核心特性：
 可以设置中间件来响应 HTTP 请求。
 定义了路由表用于执行不同的 HTTP 请求动作。
 可以通过向模板传递参数来动态渲染 HTML 页面。
 body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
 cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
 multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
 *
 */
// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//     res.send('Hello World');
// })
//
// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })

//     ====== 路由====
// var express = require('express');
// var app = express();
//
// //  主页输出 "Hello World"
// app.get('/', function (req, res) {
//     console.log("主页 GET 请求");
//     res.send('Hello GET');
// })
//
//
// //  POST 请求
// app.post('/', function (req, res) {
//     console.log("主页 POST 请求");
//     res.send('Hello POST');
// })
//
// //  /del_user 页面响应
// app.get('/del_user', function (req, res) {
//     console.log("/del_user 响应 DELETE 请求");
//     res.send('删除页面');
// })
//
// //  /list_user 页面 GET 请求
// app.get('/list_user', function (req, res) {
//     console.log("/list_user GET 请求");
//     res.send('用户列表页面');
// })
//
// // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// app.get('/ab*cd', function(req, res) {
//     console.log("/ab*cd GET 请求");
//     res.send('正则匹配');
// })


// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })

//  ====== 静态文件===

// var express = require('express');
// var app = express();
//
// // 静态文件使用
// app.use(express.static('public')); // http://127.0.0.1:8081/images/1.jpg
//
// app.get('/', function (req, res) {
//     res.send('Hello World');
// })
//
// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })

/**
 * get 的方法  对应这get.html 页面
 */

// var express = require('express');
// var app = express();
//
// app.use(express.static('public'));
//
// app.get('/get.html', function (req, res) {
//     res.sendFile( __dirname + "/" + "get.html" );
// })
//
// app.get('/process_get', function (req, res) {
//
//     // 输出 JSON 格式
//     var response = {
//         "first_name":req.query.first_name,
//         "last_name":req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })
//
// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })

/**
 *POST 方法 对应这post.html
 */
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
//
// // 创建 application/x-www-form-urlencoded 编码解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
//
// app.use(express.static('public'));
//
// app.get('/post.html', function (req, res) {
//     res.sendFile( __dirname + "/" + "post.html" );
// })
//
// app.post('/process_post', urlencodedParser, function (req, res) {
//
//     // 输出 JSON 格式
//     var response = {
//         "first_name":req.body.first_name,
//         "last_name":req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })
//
// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })

/**
 * 文件上传
 * 以下我们创建一个用于上传文件的表单，使用 POST 方法，表单 enctype 属性设置为 multipart/form-data。
 *
 */
// var express = require('express');
// var app = express();
// var fs = require("fs");
//
// var bodyParser = require('body-parser');
// var multer  = require('multer');
//
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}).array('image'));
//
// app.get('/upload.html', function (req, res) {
//     res.sendFile( __dirname + "/" + "upload.html" );
// })
//
// app.post('/file_upload', function (req, res) {
//     console.log(req.files[0]);  // 上传的文件信息
//
//     var des_file = __dirname + "/" + req.files[0].originalname;
//     fs.readFile( req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err) {
//             if( err ){
//                 console.log( err );
//             }else{
//                 response = {
//                     message:'File uploaded successfully',
//                     filename:req.files[0].originalname
//                 };
//             }
//             console.log( response );
//             res.end( JSON.stringify( response ) );
//         });
//     });
// })
//
// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })

/**
 *
 * Cookie 管理
 */
// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
})

app.listen(8081);