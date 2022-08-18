function *gen(){
    console.log("Hello");
    console.log("Good");
    console.log("Morning");
    yield 'How Are You'
    console.log("i m a developer");
};

let g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


function *generateit(){
    let nextNum = 300;
    while(true){
        yield(nextNum++);
    }
};

let ge = generateit();
console.log(ge.next().value);
console.log(ge.next());
console.log(ge.next().value);
console.log(ge.next());
console.log(ge.next());

// with for of loop

for(let value of ge){
    if (value>310) break;
    console.log(value);
};


function *fn(){
    let yAry = [yield,yield,yield];
    console.log(`Result : ${yAry}`);
};

let x = fn();
x.next();
x.next(500);
x.next(700);
x.next("");

//string

function *fnc(){
    let yAry = [yield,yield,yield,yield];
    console.log(`Result : ${yAry}`);
};

let y = fnc();
y.next();
y.next("JAVA");
y.next("HTML");
y.next("CSS");
y.next("React");



//by the using of Spread operator

function *geneit(){
    yield "PHP";
    yield "React";
    yield "Angular";
    yield "Vue";
    yield "JavaScript";
    yield "Node";

};

let gayu = geneit();
console.log(gayu.next().value);
console.log(gayu.next().value);
console.log([...gayu]);
console.log(gayu.return("Yield Ended"));
