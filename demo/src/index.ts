function getUserName():string | number {
    if (Math.random() < 0.5) {
        return 'yuan jin';
    }
    return 404;
}
var myName = getUserName();
if (typeof myName === 'string') {
    myName = myName.split(' ')
        .filter(it => it)
        .map(it => it[0].toUpperCase() + it.substr(1))
        .join(" ");
}

let say:string= 'hello';

console.log(say)
