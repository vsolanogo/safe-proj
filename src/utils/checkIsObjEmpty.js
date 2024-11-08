export const checkIsObjEmpty = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object
