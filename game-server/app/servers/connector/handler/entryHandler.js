module.exports = function (app) {
  return new Handler(app);
};

var Handler = function (app) {
  this.app = app;
};

/**
 * New client entry.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next step callback
 * @return {Void}
 */
Handler.prototype.entry = function (msg, session, next) {
  next(null, { code: 200, msg: 'Serverul a pornit' });
};

Handler.prototype.longestSequenceOfZeroes = function (msg, session, next) {
  var maxSequenceLength = -1;

  var counter = 0;

  var number = msg;

  console.log(msg);

  while (number) {
    if (!(number & 1)) {
      counter++;

      number = number >> 1;

      maxSequenceLength =
        maxSequenceLength > counter ? maxSequenceLength : counter;
    } else {
      maxSequenceLength =
        maxSequenceLength > counter ? maxSequenceLength : counter;

      counter = 0;

      number = number >> 1;
    }
  }

  next(null, { code: 200, msg: maxSequenceLength });
};

/**
 * Publish route for mqtt connector.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next step callback
 * @return {Void}
 */
Handler.prototype.publish = function (msg, session, next) {
  var result = {
    topic: 'publish',
    payload: JSON.stringify({ code: 200, msg: 'publish message is ok.' }),
  };
  next(null, result);
};

/**
 * Subscribe route for mqtt connector.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next step callback
 * @return {Void}
 */
Handler.prototype.subscribe = function (msg, session, next) {
  var result = {
    topic: 'subscribe',
    payload: JSON.stringify({ code: 200, msg: 'subscribe message is ok.' }),
  };
  next(null, result);
};
