import { name1 } from "./myModule";

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

type Gender = "男" | "女";
type User = {
    name: string
    age: number
    gender: Gender
}
let u: User;
function getUsers(g: Gender = "女"): number[] {
    return [];
}
getUsers("男");

/** 
 * 扑克牌练习
 * @param
 * @param
 */
type Deck = NormalCart[];
// type Color = "♥" | "♠" | "♦" | "♣";
enum Color{
    heart = "♥",
    spade = "♠",
    club = "♦",
    diamond = "♣"
}
enum Mark {
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    sever = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    king = "K"
}
type NormalCart = {
    color: Color
    mark: Mark
}
function createDeck() : Deck{
    const deck: Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for(const c of colors) {
            deck.push({
                color: c,
                mark: m
            })
        }
    }
    return deck;
}

function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach((card, i) => {
        let str = card.color + card.mark;
        result += str + "\t";
        if ((i+1) % 6 === 0) {
            result += "\n";
        }
    })
    console.log(result);
}

// const deck = createDeck();
// printDeck(deck);

enum GenderEum{
    meal = "男",
    femal = "女"
}
enum Permission {
    Read = 1,   // 0001
    Write = 2,  // 0010
    Create = 4, // 0100
    Delete = 8  // 1000
}
// 如何组合权限，使用或运算
let p = Permission.Read | Permission.Write;
p = p ^ Permission.Write;

function hasPermission(target: Permission, per: Permission) {
    return (target & per) === per;
}




