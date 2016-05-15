import clone from 'lodash/clone'
import set from 'lodash/set'
import isArray from 'lodash/isArray'
import head from 'lodash/head'
import tail from 'lodash/tail'
import map from 'lodash/map'


const update = (obj, path, nextValue) => {
  const pathArr = isArray(path) ? path : path.split('.');
  let newObj;
  if (!pathArr.length) {
    return nextValue;
  } else {
    if (!obj[pathArr[0]]) {
      newObj = clone(obj);
      set(newObj, pathArr, nextValue);
      return newObj;
    } else if (isArray(obj)) {
      newObj = clone(obj);
      newObj[head(pathArr)] = update(newObj[head(pathArr)], tail(pathArr), nextValue);
      return newObj;
    } else {
      newObj = {};
      map(obj, (value, key, currentObj) => {
        if (key === pathArr[0]) {
        newObj[key] = update(value, tail(pathArr), nextValue);
      } else {
        newObj[key] = obj[key];
      }
    });
      return newObj;
    }
  }
};

export default update;