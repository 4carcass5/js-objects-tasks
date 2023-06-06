const fill = (object, keys = [], data = {}) => {
    const entries = Object.entries(data);
    if (keys.length === 0) {
      for (const [key, value] of entries) {
        object[key] = value;
      }
    } else {
      for (const key of keys) {
        if (data.hasOwnProperty(key)) {
          object[key] = data[key];
        }
      }
    }
    return object;
  };
  
  export default fill;




