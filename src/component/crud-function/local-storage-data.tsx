const getLocalItems = () => {
  const data = localStorage.getItem("userData");
  if (data) {
    return JSON.parse(localStorage.getItem("userData") || "");
  } else {
    return [];
  }
};

export default getLocalItems;
