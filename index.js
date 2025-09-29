function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key));
      }
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let start = 0;
  if (acc === undefined) {
    if (Array.isArray(collection)) {
      acc = collection[0];
      start = 1;
    } else {
      const keys = Object.keys(collection);
      acc = collection[keys[0]];
      start = 1;
    }
  }
  if (Array.isArray(collection)) {
    for (let i = start; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = start; i < keys.length; i++) {
      const key = keys[i];
      acc = callback(acc, collection[key], collection);
    }
  }
  return acc;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
