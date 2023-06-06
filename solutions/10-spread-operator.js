const companyDefaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };
  
  const createCompany = (name, data = {}) => ({
      name,
      ...companyDefaultData,
      ...data,
  });
  
  export default createCompany;
