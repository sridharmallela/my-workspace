'use strict';

const { argv, exit, stderr, stdout } = require('node:process');
const { spawn } = require('node:child_process');
const { Command } = require('commander');

const com = new Command();

/* istanbul ignore next */
// AOP around for commander to option missing argument
around(com, 'optionMissingArgument', (fn, args) => {
  com.outputHelp();
  fn.apply(this, args);
  return { args: [], unknown: [] };
});

/* istanbul ignore next */
// AOP before for commander to output help
before(com, 'outputHelp', () => {
  // track if help was shown for unknown option
  this._helpShown = true;
});

/* istanbul ignore next */
// AOP before for commander to unknown option
before(com, 'unknownOption', () => {
  // allow unknown options if help was shown, to prevent trailing error
  this._allowUnknownOption = this._helpShown;
  // show help if not yet shown
  if (!this._helpShown) {
    com.outputHelp();
  }
});

// default object for creation
function Programmer() {
  this.commander = com;
  this.exited = false;
}

// construct copyrights
Programmer.prototype.copyrights = msg =>
  String(`  Copyright (c) ${String(new Date().getUTCFullYear())} ${msg || ''}`);

// prints based on prompt message
Programmer.prototype.promptMessage = msg =>
  String(`    ${'win32' === process.platform ? '> ' : '$ '}${msg || ''}`);

// useful to run unit tests on CLI
// execution absolute path, args array, cb(code, out, err)
Programmer.prototype.runCommand = (execPath, args, callback) => {
  let argus = [execPath].concat(args);
  let exec = argv[0];
  let stderr = '';
  let stdout = '';
  const child = spawn(exec, argus, {});
  child.stdout.setEncoding('utf8');
  child.stdout.on('data', str => {
    stdout += String(str);
  });
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', str => {
    stderr += String(str);
  });
  child.on('close', onclose);
  child.on('error', callback);
  function onclose() {
    callback(null, stdout, stderr);
  }
};

/**
 * Graceful exit for async STDIO
 */
Programmer.prototype.exit = code => {
  function done() {
    /* istanbul ignore next */
    if (!draining--) {
      /* istanbul ignore next */
      exit(code);
    }
  }
  let draining = 0;
  let streams = [stdout, stderr];
  this.exited = true;
  streams.forEach(stream => {
    // submit empty write request and wait for completion
    draining += 1;
    stream.write('', done);
  });
  done();
};

exports = module.exports = new Programmer();

// ---------- Utility Functions ----------
/* istanbul ignore next */
function around(obj, method, fn) {
  var old = obj[method];
  obj[method] = function () {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.call(this, old, args);
  };
}

/* istanbul ignore next */
function before(obj, method, fn) {
  var old = obj[method];
  obj[method] = function () {
    fn.call(this);
    old.apply(this, arguments);
  };
}
