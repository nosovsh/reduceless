const _ = require('lodash');

const update = (obj, path, value) => {
  const pathArr = _.isArray(path) ? path : path.split('.');
  let newObj;
  if (!pathArr.length) {
    return value;
  } else {
    if (!obj[pathArr[0]]) {
      newObj = _.clone(obj);
      _.set(newObj, pathArr, value);
      return newObj;
    } else if (_.isArray(obj)) {
      newObj = _.clone(obj);
      newObj[_.head(pathArr)] = update(newObj[_.head(pathArr)], _.tail(pathArr), value);
      return newObj;
    } else {
      newObj = {};
      _.map(obj, (value, key, currentObj) => {
        if (key === pathArr[0]) {
        newObj[key] = update(value, _.tail(pathArr), value);
      } else {
        newObj[key] = obj[key];
      }
    });
      return newObj;
    }
  }
};

export default update;