import crc32 from "crc-32";
export const make = (capacity = 1000) => {
  return { data: {} };
};
export const set = (obj, key, value) => {
  const index = crc32.str(key) % obj.data.length;
  if (obj.data[index] && obj.data[index][0] !== key) {
    return false;
  } else {
    obj.data[index] = [key, value];
  }
  return true;
};
export const get = (obj, key, defaultValue = null) => {
  const index = crc32.str(key) % obj.data.length;
  return obj.data[index] && obj.data[index][0] === key ? obj.data[index][1] : defaultValue;
};
export default { make, set, get };




