#! /usr/bin/env node

var logger = require('../node.js')('mocha:test');

describe('debug-alt specs', function() {
    describe('README', function() {
        it('how to enable logging output', function() {
            console.log("        Usage (in shell command line):");
            console.log("          export DEBUG='mocha:test'; mocha                         # run this test with logging enabled");
            console.log("          export DEBUG='mocha:test'; mocha > log.log 2> err.log    # save log in 2 files");
        });
        it.skip('how to enable logging in codes', function() {
            console.log("        todo");
        });

    });
    describe('logger methods in sync', function() {
        it('logging in main codes', function() {
            logger('common log in main');
        });
        it('logging in a named function', function() {
            function namedFunc( args ) {
                logger('log in a named func');
            }; 
            namedFunc( {a: {b: 3}} );
        });
        it('logging in an anonymouse function', function() {
            var anonymouseFunc = function( args ) {
                logger('log in an anonymouse func');
            }; 
            anonymouseFunc( {a: {b: 3}} );
        });
    });
    describe('logger methods in async', function(done) {
        it.skip('todo test', function(done){
            done();
        });
    });
});



// # logger

/*
var logger = {};
logger.log = function(){
    if (!process.env.DEBUG) return;

    var now = new Date();
    var header = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + '.'+now.getMilliseconds() +' '+ (arguments.callee.caller.name || 'NA') + "() -> ",
    /// var header = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + '.'+now.getMilliseconds() + ' ['+module_id+'] ' + (arguments.callee.caller.name || 'NA') + "() -> ",
        args = Array.prototype.slice.call(arguments);
    args.splice(0,0,header);
    _debug.apply(console, args);
};
*/


// # test

