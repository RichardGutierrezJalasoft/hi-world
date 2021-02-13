const readData = function (data) {
  if (window.localStorage.getItem(data) === null) {
    const dataLocal = [];
    console.log(data)
    window.localStorage.setItem(data, JSON.stringify(dataLocal));
  }
  const dataJson = window.localStorage.getItem(data);
  return JSON.parse(dataJson);
}

const saveData = function (data, item) {
  if (!item) {
    return false;
  }
  const dataLocal = readData(data);
  dataLocal.push(item);
  window.localStorage.setItem(data, JSON.stringify(dataLocal));
  return true;
}

export { readData, saveData };