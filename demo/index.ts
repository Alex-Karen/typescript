function getUserName():string | number {
    if (Math.random() < 0.5) {
        return 'yuan jin';
    }
    return 404;
}
var myName = getUserName();
myName = typeof myName === 'string' &&  myName.split(' ')
        .filter(it => it)
        .map(it => it[0].toUpperCase() + it.substr(1))
        .join(" ");
