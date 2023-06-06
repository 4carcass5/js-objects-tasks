const get = (obj, keys) => {
    let result = obj;
    for (let key of keys) {
      if (result === null || result === undefined || !result.hasOwnProperty(key)) {
        return null;
      }
      result = result[key];
    }
    return result;
  };
  
  export default get;
