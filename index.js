
var getSignalNumber = require('get-signal').getSignalNumber;
var stop = getSignalNumber('SIGSTOP');
var cont = getSignalNumber('SIGCONT');

function stop(child) {
  if (!child || !child.kill || !child.send)
    throw new Error('cannot stop itself or non-ChildProcess object');
  child.kill(stop);
}

function resume(child) {
  if (!child || !child.kill || !child.send)
    throw new Error('cannot stop itself or non-ChildProcess object');
  child.kill(cont);
}

exports.stop = stop;
exports.resume = resume;

