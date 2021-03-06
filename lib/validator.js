'use strict';

let validator = module.exports = {};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */

validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};

validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};

/**
 * What Value does the array have?
 * @param input
 * @returns {boolean}
 */

validator.arrValue = (input) => {
  return typeof input === 'string';
};

/**
 * Does the array have corresponding values with the list?
 * @param input
 * @returns {boolean}
 */