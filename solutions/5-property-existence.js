export default (string) => {
  const result = {};
  if (string) { 
    const words = string.toLowerCase().split(' '); 
    words.forEach((word) => {
      1
      result[word] = result[word] ? result[word] + 1 : 1;
    });
  }
  return result;
};
