#! /usr/bin/env node

var debug = require('../node.js')('mocha:test');

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

    describe('show func name', function() {
        it('logging in main codes', function() {
            debug('INFO common log in main');
        });
        it('logging in a named function', function() {
            function namedFunc( args ) { debug('log in a named func, with args = ', args); }; 
            namedFunc( {a: {b: 3}} );
        });
        it('logging in an anonymouse function, with args = ', function() {
            var anonymouseFunc = function( args ) { debug('log in an anonymouse func', args); }; 
            anonymouseFunc( {a: {b: 3}} );
        });
    });

    describe('show debug level', function() {
        it('debug level is FATAL by default', function() {
            debug('should show FATAL');
        });
        it('debug level is FATAL', function() {
            debug('Fatal', 'should show FATAL');
        });
        it('debug level is ERROR', function() {
            debug('erROR', 'should show ERROR');
        });
        it('debug level is WARN', function() {
            debug('warn', 'should show WARN');
        });
        it('debug level is INFO', function() {
            debug('info', 'should show INFO');
        });
        it('debug level is DEBUG', function() {
            debug('debug', 'should show DEBUG');
        });
        it('debug level is TRACE', function() {
            debug('trace', 'should show TRACE');
        });
        it('debug level is wrong-spelled', function() {
            debug('de bug', 'should show FATAL, with kept wrong-spelled level name');
        });

    });

    /*
    describe('logger methods in async', function(done) {
        it('todo test', function(done){
            done();
        });
    });
    */
});

