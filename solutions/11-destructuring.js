const getSortedNames = (users) => {
    return users
      .map(user => user.name)
      .sort();
  };
  
  export default getSortedNames;
