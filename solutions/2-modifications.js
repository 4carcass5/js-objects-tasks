const normalize = (object) => {
    const {name, description, ...rest} = object;
    object.name = name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "";
    object.description = description.toLowerCase();
    return {...rest, name, description};
  };
  
  export default normalize;
