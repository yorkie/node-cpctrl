
var getSignalNumber = require('get-signal').getSignalNumber;
var stop = getSignalNumber('SIGSTOP');
var cont = getSignalNumber('SIGCONT');

function stop(child) {
  if (!child || !child.kill || !child.send)
    throw new Error('cannot stop itself or non-ChildProcess object');
  child.kill(stop);
  child.stoped = true;
}

function resume(child) {
  if (!child || !child.kill || !child.send)
    throw new Error('cannot stop itself or non-ChildProcess object');
  if (!child.stoped)
    throw new Error('you just resume that stoped process');
  child.kill(cont);
  child.stoped = false;
}

exports.stop = stop;
exports.resume = resume;

