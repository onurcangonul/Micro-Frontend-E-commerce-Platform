import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { fetchProducts } from "../services/products/productApi";
import {
  fetchCategories,
} from "../services/categories/categoriesApi";
import { SlBasket } from "react-icons/sl";
import { IoChevronDown, IoChevronUpOutline } from "react-icons/io5";
import Loading from "./Loading";
import { addToCart } from "shoppingCart/addToCart";
import { toast } from "react-toastify";
const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const { categories } = useSelector((state: RootState) => state.categories);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("rating");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    applyFiltersAndSorting();
  }, [products, selectedCategories, sortOption]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const applyFiltersAndSorting = () => {
    let updatedProducts = products;
    if (selectedCategories.length > 0) {
      updatedProducts = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    updatedProducts = [...updatedProducts].sort((a, b) => {
      if (sortOption === "price")
        return parseFloat(a.price) - parseFloat(b.price);
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });

    setFilteredProducts(updatedProducts);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

    const handleAddToCart = (product:any) => {
      dispatch(
        addToCart({
          id: product.id,
          name: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: 1,
        })
      );
      toast.success("Product Added")
    };

  if (loading) return <Loading />;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div>
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold text-primary">All Products</h2>
        <p className="text-secondary mt-2">
          Explore our wide selection of products to find the perfect fit for
          your needs.
        </p>
      </div>

      {/* Sort and Category Dropdown Side */}
      <div className="flex justify-center gap-4 mb-6">
        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={toggleSortDropdown}
            className="flex items-center justify-between w-full px-4 py-2 border rounded bg-primary text-white"
          >
            Sort By
            {isSortDropdownOpen ? (
              <IoChevronDown className="w-5 h-5 ml-2" />
            ) : (
              <IoChevronUpOutline className="w-5 h-5 ml-2" />
            )}
          </button>
          {isSortDropdownOpen && (
            <div className="absolute top-12 left-0 w-48 bg-white border rounded-lg shadow-lg">
              <div className="px-4 py-2 hover:bg-gray-100">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sortOption"
                    value="price"
                    checked={sortOption === "price"}
                    onChange={(e) => setSortOption(e.target.value)}
                  />
                  <span className="ml-2">Price</span>
                </label>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sortOption"
                    value="rating"
                    checked={sortOption === "rating"}
                    onChange={(e) => setSortOption(e.target.value)}
                  />
                  <span className="ml-2">Rating</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <button
            onClick={toggleCategoryDropdown}
            className="flex items-center justify-between w-full px-4 py-2 border rounded bg-primary text-white"
          >
            Categories
            {isCategoryDropdownOpen ? (
              <IoChevronDown className="w-5 h-5 ml-2" />
            ) : (
              <IoChevronUpOutline className="w-5 h-5 ml-2" />
            )}
          </button>
          {isCategoryDropdownOpen && (
            <div className="absolute top-12 left-0 w-48 overflow-y-scroll h-60 bg-white border rounded-lg shadow-lg">
              {categories.map((category) => (
                <div
                  key={category.slug}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategories.includes(category.slug)}
                      onChange={() => handleCategorySelect(category.slug)}
                    />
                    <span>{category.name}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product List */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-72 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <img
              className="w-full h-52 object-cover"
              src={product.thumbnail ?? ""}
              alt={product.title ?? ""}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 truncate">
                {product.title}
              </h3>
              <span className="text-sm text-secondary font-normal mb-1">
                SKN: {product.sku}
              </span>
              <div className="flex items-center mb-1 ">
                <span className="text-xl font-bold text-primary">
                  {product.price} £
                </span>
              </div>
              <div className="flex flex-col mb-2">
                <span
                  className={`text-sm ${
                    product.availabilityStatus !== "In Stock"
                      ? "bg-orange-500"
                      : "bg-green-500"
                  }  w-2/5 text-center text-white rounded-full p-1 shadow-md`}
                >
                  {product.stock > 0
                    ? product.availabilityStatus
                    : "Not Available"}
                </span>
                <div className="flex items-center text-yellow-500 text-sm gap-2 mt-2 bg-gray-50 shadow-md rounded-full p-2 w-2/4 justify-center">
                  {"★".repeat(product.rating)}
                  <span className="text-secondary font-bold">
                    {product.rating}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex gap-2 items-center justify-center w-full bg-primary text-white text-sm py-2 rounded-lg hover:bg-darkBlue transition-all"
                >
                  <SlBasket size={16} />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
