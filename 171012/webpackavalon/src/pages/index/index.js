// console.log('index====3344');
require('./index.css')
// $('.container').html('12300i3r4efef');
var vm = avalon.define({
    $id: "test",
    name: "谔谔纷纷顶顶顶",
    array: [11,22,33]
});
setTimeout(function () {
    vm.array.set(0,444);
},2000);