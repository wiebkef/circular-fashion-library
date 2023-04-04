import axios from "../axiosInstance";

export const getSizes = () => {
  return ["XS", "S", "M", "L", "XL"];
};

export const getColors = () => {
  return ["black", "white", "grey", "blue", "red", "green", "yellow"];
};

export const getBrands = () => {
  return ["Levis", "Diesel", "Hugo", "Armed Angels"];
};

let categoryObj = null;
export function getCategories() {
  axios
    .get(`/api/categories`)
    .then((res) => {
      categoryObj = res.data;
    })
    .catch((e) => console.log(e));
  console.log("BLAAAAAAAAAAHHHHHHHH", categoryObj);
  return categoryObj;
}

let featureObj = null;
export function getFeatures() {
  axios
    .get(`/api/features`)
    .then((res) => {
      featureObj = res.data;
    })
    .catch((e) => console.log(e));
  return featureObj;
}

/* let categoryArr = [];
export function getCategories() {
  axios
    .get(`/api/categories`)
    .then((res) => {
      const categoryObj = res.data;
      categoryArr = [];
      categoryObj.map((cat) => {
        categoryArr.push(cat.name);
      });
    })
    .catch((e) => console.log(e));
  return categoryArr;
} */

export const getStatuses = () => {
  return ["available", "repair", "recycling", "unavailable"];
};

// module.exports = { getSizes, getColors, getBrands, getCategories, getStatuses };
