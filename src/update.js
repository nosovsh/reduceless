const _ = require('lodash');

const update = (obj, path, nextValue) => {
  const pathArr = _.isArray(path) ? path : path.split('.');
  let newObj;
  if (!pathArr.length) {
    return nextValue;
  } else {
    if (!obj[pathArr[0]]) {
      newObj = _.clone(obj);
      _.set(newObj, pathArr, nextValue);
      return newObj;
    } else if (_.isArray(obj)) {
      newObj = _.clone(obj);
      newObj[_.head(pathArr)] = update(newObj[_.head(pathArr)], _.tail(pathArr), nextValue);
      return newObj;
    } else {
      newObj = {};
      _.map(obj, (value, key, currentObj) => {
        if (key === pathArr[0]) {
        newObj[key] = update(value, _.tail(pathArr), nextValue);
      } else {
        newObj[key] = obj[key];
      }
    });
      return newObj;
    }
  }
};

export default update;