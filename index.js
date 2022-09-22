function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function callBack(){
    }
}

function returnsAnAnonymousFunction(){
    return function (){
    }
}