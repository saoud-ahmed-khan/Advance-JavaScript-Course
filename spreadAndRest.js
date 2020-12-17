// const array1=[1,"saoud",2,"muneeb",{a:1,B:2}]
// console.log(array1);


//spread
// var arrr1=[1,2,3,4,5]
// console.log(arrr1);
// var arrr2=[...arrr1,78,87];
// console.log(arrr2);
// var obj={a:1,b:3}
// var objcopy={...obj,a:2,c:6}
// console.log(objcopy);

//rest operator

function addition(...args)
console.log(args);
{ let sum=0;
    for (const arg of args) {
    sum=sum+arg;
    }
    return sum;
}

console.log(addition(1,1,1,1,1));