export const arrToObj = (arr, key = "_id") => {
  const obj = {};
  arr.map((item) => {
    obj[item[key]] = item;
    console.log("item =>", item);
  });
  return obj;
};
