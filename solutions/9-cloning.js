export const cloneShallow = (object) => {
    if (!object || typeof object !== 'object') return object;
    const newObject = {};
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      newObject[key] = object[key];
    }
    return newObject;
  };
  
  export default cloneShallow;








