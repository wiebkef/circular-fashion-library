import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

function ItemForm() {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    sku: "",
    category_id: "",
    brand: "",
    title: "",
    images: "",
    short_description: "",
    description: "",
    status: "",
  });
  const [error, setError] = useState({
    sku: "",
    category_id: "",
    brand: "",
    title: "",
    images: "",
    short_description: "",
    description: "",
    features: "",
    status: "",
  });
  const [images, setImages] = useState(null);
  const [features, setFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  // const [reload, setReload] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`/api/items/${id}`)
        .then((res) => {
          setItem(res.data);
          res.data.features.map((feature) => selectedFeatures.push(feature.id));
        })
        .catch((e) => console.log(e));
    }
    axios
      .get(`/api/features`)
      .then((res) => setFeatures(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
    console.log("IMAGEEEEESSSSS", images);
  };
  /*   const handleImages = (e) => {
    // const files = e.target.files;
    // e.target.files.forEach((file) => setImages([...images, file]));
    console.log(e.target.files);
    console.log(images);
  }; */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("sku", item.sku);
    formData.append("category_id", item.category_id);
    formData.append("brand", item.brand);
    formData.append("title", item.title);
    formData.append("short_description", item.short_description);
    formData.append("description", item.description);
    formData.append("features", selectedFeatures);
    formData.append("status", item.status);
    images
      ? formData.append("images", images)
      : formData.append("images", item.images);
    if (id) {
      axios
        .put(`/api/items/${id}`, formData)
        .then((res) => {
          // navigate(`/admin/items/${id}`);
          window.location.reload();
          // setReload(true);
        })
        .catch((err) => {
          setError("err.response.data.errors");
        });
    } else {
      axios
        .post("/api/items", formData)
        .then((res) => {
          navigate(`/admin/items/${res.data.id}`);
        })
        .catch((err) => {
          setError("err.response.data.errors");
        });
    }
  };

  return (
    <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-xl">
      <div className="bg-white py-8 px-6 border shadow-md rounded-lg sm:px-10">
        <h1 className="mb-16 text-3xl font-bold">
          {id ? "Update" : "Add a new"} item
        </h1>
        <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="mt-1 relative">
              {error.sku && <p className="text-red-700">{error.sku.message}</p>}
              <input
                type="text"
                id="sku"
                name="sku"
                value={item.sku}
                placeholder="SKU"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                htmlFor="sku"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                SKU
              </label>
            </div>
          </div>
          <div>
            <div className="mt-1 relative">
              {error.category_id && (
                <p className="text-red-700">{error.category_id.message}</p>
              )}
              <input
                type="text"
                id="category_id"
                name="category_id"
                value={item.category_id}
                placeholder="Category ID"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                htmlFor="category_id"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Category ID
              </label>
            </div>
          </div>
          <div>
            <div className="mt-1 relative">
              {error.brand && (
                <p className="text-red-700">{error.brand.message}</p>
              )}
              <input
                type="text"
                id="brand"
                name="brand"
                value={item.brand}
                placeholder="Brand"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                htmlFor="brand"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Brand
              </label>
            </div>
          </div>
          <div>
            <div className="mt-6 relative">
              {error.title && (
                <p className="text-red-700">{error.title.message}</p>
              )}
              <input
                type="text"
                id="title"
                name="title"
                value={item.title}
                placeholder="Title"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                htmlFor="title"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Title
              </label>
            </div>
          </div>
          <div>
            {item.images && (
              <>
                <h3 className="text-start text-md font-bold">Current Image</h3>
                <img src={item.images} />
              </>
            )}
            <div className="mt-6 relative">
              {error.images && (
                <p className="text-red-700">{error.images.message}</p>
              )}
              <input
                type="file"
                id="images"
                name="images"
                placeholder="Select new image to replace"
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={(e) => setImages(e.target.files[0])}
              />
              <label
                htmlFor="images"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Select new image to replace
              </label>
            </div>
          </div>
          <div>
            <div className="mt-6 relative">
              {error.short_description && (
                <p className="text-red-700">
                  {error.short_description.message}
                </p>
              )}
              <textarea
                id="short_description"
                name="short_description"
                value={item.short_description}
                placeholder="Short Description"
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              ></textarea>
              <label
                htmlFor="short_description"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Short Description
              </label>
            </div>
          </div>
          <div>
            <div className="mt-6 relative">
              {error.description && (
                <p className="text-red-700">{error.description.message}</p>
              )}
              <textarea
                id="description"
                name="description"
                value={item.description}
                placeholder="Description"
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              ></textarea>
              <label
                htmlFor="description"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Description
              </label>
            </div>
          </div>
          <div>
            <div className="mt-6 relative">
              {error.features && (
                <p className="text-red-700">{error.features.message}</p>
              )}
              <select
                id="features"
                name="features[]"
                value={selectedFeatures}
                placeholder="Features"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={(e) =>
                  setSelectedFeatures(
                    [...e.target.selectedOptions].map((opt) =>
                      Number(opt.value)
                    )
                  )
                }
                // onChange={(e) => console.log(e.target.value)}
                multiple
              >
                {features.map((feature) => (
                  <option key={feature.id} value={feature.id}>
                    {feature.name}
                  </option>
                ))}
              </select>
              <label
                htmlFor="features"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Features
              </label>
            </div>
          </div>
          <div>
            <div className="mt-6 relative">
              {error.status && (
                <p className="text-red-700">{error.status.message}</p>
              )}
              <input
                type="text"
                id="status"
                name="status"
                value={item.status}
                placeholder="Status"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                htmlFor="status"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Status
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center mt-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
            >
              {id ? "Update" : "Add new"} item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemForm;
