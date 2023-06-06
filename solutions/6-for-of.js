const pick = (obj, props) => {
    const result = {};
    for (const prop of props) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  };
  
  export default pick;