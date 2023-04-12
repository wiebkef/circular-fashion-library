import axios from "../axiosInstance";

export const getSizes = () => {
  return ["XS", "S", "M", "L", "XL"];
};

export const getColors = () => {
  return [
    "black",
    "white",
    "grey",
    "blue",
    "navy",
    "red",
    "green",
    "yellow",
    "pink",
    "purple",
    "orange",
    "olive",
    "teal",
    "turquoise",
    "brown",
    "beige",
    "multicolor",
  ];
};

export const getBrands = () => {
  return [
    "Adidas",
    "Armed Angels",
    "CHER17",
    "Diesel",
    "Hugo",
    "Jack Wolfskin",
    "Lacoste",
    "Levis",
    "Nike",
    "Patagonia",
    "The North Face",
    "Tommy Hilfiger",
  ];
};

export function getCategories() {
  return axios.get(`/api/categories`);
}

export const getGenders = () => {
  return ["female", "male", "unisex"];
};

export function getFeatures() {
  return axios(`/api/features`);
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
