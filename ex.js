function topLevelFun(message)
{
    console.log(message, this);
    console.log(message, typeof this);
}
topLevelFun("topLevelFun: ");
// topLevelFun.apply({ name: "Elsa", age: 25 }, ["topLevelFun.call: "]);
const test = topLevelFun.bind({ name: "Ali", age: 20 });
// test("test: ");
const topLevelArrowFun = (message) =>
{
    console.log(message, this);
    console.log(message, typeof this);
};
// topLevelArrowFun("topLevelArrowFun: ");
// topLevelArrowFun.apply({ name: "Lily", age: 25 }, ["topLevelArrowFun.apply: "]);
const obj = {
    name: "Omar",
    insideObjArrowFun: (message) =>
    {
        console.log(message, this);
        console.log(message, typeof this);
    },
    insideObjFun: function (message)
    {
        console.log(message, this);
        console.log(message, typeof this);
    },
    copyOfTopLevelFun: topLevelFun,
    copyOfTopLevelArrowFun: topLevelArrowFun,
    copyOfTestFun: test,
};
// obj.insideObjFun("insideObjFun: ");
// obj.copyOfTopLevelFun("copyOfTopLevelFun: ");
// obj.copyOfTopLevelArrowFun("copyOfTopLevelArrowFun: ");
// obj.copyOfTestFun("copyOfTestFun: ");
// obj.insideObjArrowFun("insideObjArrowFun: ");
const copyOfInsideObjFun = obj.insideObjFun;
// copyOfInsideObjFun("copyOfInsideObjFun: ");
function Fun(name, age)
{
    this.name = name;
    this.age = age;

    // can't use `function this.insideFunConstructor()` because it should be called, unless you assigned it to a variable
    this.insideFunConstructor = function (message)
    {
        console.log(message, this);
        console.log(message, typeof this);
    };
}
const fun = new Fun("Mohamed", 25);
// fun.insideFunConstructor("insideFunConstructor: ");


console.log(this)