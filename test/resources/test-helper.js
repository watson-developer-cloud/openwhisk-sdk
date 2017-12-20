const assert = require('assert');

/**
 * Create a function which delegates to openwhisk to run an action
 * named `qualifiedName`
 */
const createAdapter = (qualifiedName, ow) =>
  function (params) {
    return ow.actions.invoke({
      name: qualifiedName,
      blocking: true,
      result: true,
      params
    });
  };

/**
 * For each function in an object, create an openwhisk adapter.
 * return an object with each adapter function.
 */
const adapt = (obj, qualifiedName, ow) => {
  const adapter = {};
  Object.keys(obj).forEach((func) => {
    adapter[func] = createAdapter(qualifiedName, ow);
  });
  return adapter;
};

const negativeHandler = (err) => {
  assert(err);
  if (typeof err === 'object' && err.message.indexOf('No failure') !== -1) {
    throw err
  }
};

module.exports = { adapt, negativeHandler };
