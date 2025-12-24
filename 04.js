let a = 30
let opt = '+'
let b = 40

switch(opt){
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        console.log(a/b);
        break;
    default:
        console.log('Invalid operator!');   
}