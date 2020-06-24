//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  if (typeof obj !== 'object') throw new Error('Not an object');

  Object.entries(obj).forEach(([key, val]) => {
    let counter = 0;

    if (typeof val === 'object') {
      recordDepth(val);
    }

    obj['depth'] = counter;
  });

  return obj;
};

module.exports = {
  recordDepth
};