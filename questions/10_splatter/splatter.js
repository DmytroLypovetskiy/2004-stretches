//write the splatter function

const splatter = (...objs) => {
  return objs.reduce((acc, next) => {
    Object.entries(next).forEach(([key, val]) => {
      acc += val;
    })
    return acc;
  }, 0)
};

module.exports = {
  splatter
};