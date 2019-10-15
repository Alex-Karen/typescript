/*
    js开发中的问题
        1.使用了不存在的变量、函数或成员
        2.把一个不确定类型，当做一个缺的定类型进行处理
        3.使用null和undefined
    js的原罪
*/
function getUserName() {
    if (Math.random() < 0.5) {
        return 'yuan jin';
    }
    return 404;
}
var myName = getUserName();

myName = myName.split(' ')
        .filter(it => it)
        .map(it => it[0].toUpperCase() + it.substr(1))
        .join(" ");

    