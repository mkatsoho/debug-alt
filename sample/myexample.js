#! /usr/bin/env node

console.log('hello');

var debug = require('debug-alt')('myexample:debug1');
var debug2 = require('debug-alt')('myexample:debug2');

function myfunc(x){
    debug2('debug', 'args = ', x);
};

debug('warn', 'executing myfunc()');
myfunc(1314);
debug('info', 'done');


