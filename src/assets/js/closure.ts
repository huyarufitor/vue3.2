const scope = 'global scope';
function checkScope() {
    const scope = 'local scope';
    function f() {
        return scope;
    }
    console.log('scope', scope);
    return f();
}

const foo = checkScope();
console.log('foo,', foo);
// foo();
