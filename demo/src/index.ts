function getUserName(): string | number {
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

let say: string = 'hello';

//console.log(say)
function isOdd(n: number): boolean {
    return n % 2 === 0;
}

let nums: number[]; // let nums: Array<number> = [1, 2, 3]

function printValues(obj: object) {
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v));
}
// printValues({
//     name: 'a',
//     age: 12
// })

let name: string | undefined;
if (typeof name === 'string') {
    // 类型保护
}

let a: "A";
a = "A";
let gender: "男" | "女";
let arr: [];// arr永远只能取值为一个空数组
let user: {
    name: string
    age: number
}
user = {
    name: 'aaa',
    age: 12
}

let tu: [string, number];
tu = ['1', 1];

let data: any;

type User = {
    name: string
    age: number
    gender: "男" | "女"
}
let u: User;
function getUsers(): number[] {
    return [];
}