const getDomainInfo = (website) => {
    const hasScheme = website.includes("://");
    const scheme = hasScheme ? website.split("://")[0] : "http";
    const name = hasScheme ? website.split("://")[1] : website;
    return { scheme, name };
  };
  
  export default getDomainInfo;