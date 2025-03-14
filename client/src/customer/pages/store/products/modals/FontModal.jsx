// Importing necessary components and libraries
import { useEffect } from "react";
import productStore from "../../../../../store/products/productStore";
import { Button } from "@nextui-org/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useTranslation } from "react-i18next";
import cartStore from "../../../../../store/cartStore";
import customerAuthStore from "../../../../../store/authentication/CustomerAuthStore";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// Functional component for the FontModal
const FontModal = () => {
  // Destructuring data and functions from the product store
  const { getProduct, productData } = productStore();

  // Fetching product data on component mount
  useEffect(() => {
    getProduct();
  }, []);

  // Generating font URL and styles
  const fontUrl = `${import.meta.env.VITE_SERVER_URL}/uploads/${
    productData.product_files[1]
  }`;
  const fontStyles = `
    @font-face {
      font-family: '${productData.product_name}';
      src: url('${fontUrl}') format('truetype');
      /* Add more font formats if needed */
    }
  `;

  // Initializing navigation hook
  const navigate = useNavigate();
  // Destructuring functions from cart store
  const { addToCart } = cartStore();

  // Function to handle adding font to cart
  const handleAddToCart = (id, customerId) => {
    // Checking for authentication token using Cookies
    const token = Cookies.get("token");
    if (token) {
      // Adding font to cart if authenticated
      addToCart(id, customerId);
    } else {
      // Redirecting to login page if not authenticated
      navigate("/login");
    }
  };

  // Initializing translation hook
  const { t } = useTranslation();

  return (
    // Main container for the FontModal
    <div className="h-fit">
      {/* Container for font preview with styles */}
      <span className="relative h-80 w-full">
        {/* Injecting font styles dynamically */}
        <style>{fontStyles}</style>
        {/* Container for font preview image and text */}
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <span className="h-48 w-full relative hover:opacity-75 duration-200">
            {/* Displaying font preview image */}
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/${
                productData.product_files[0]
              }`}
              alt={productData.product_name}
              className="h-48 w-full object-cover object-center dark:brightness-[.8]"
            />
            {/* Displaying font name text */}
            <h2
              style={{ fontFamily: productData.product_name }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl lg:text-5xl text-black text-center"
            >
              {productData.product_name} font
            </h2>
          </span>
        </div>
      </span>
      {/* Container for product details */}
      <div className=" mt-2 p-3 md:p-4 lg:p-5 xl:px-8 flex justify-between">
        {/* Displaying font name */}
        <h1 className=" text-lg md:text-xl lg:text-2xl capitalize text-primary dark:text-white">
          {productData.product_name}
        </h1>
        {/* Displaying font price */}
        <h2 className="text-lg md:text-xl capitalize text-slate-700 dark:text-white">
          {t("price")}
          <span className="font-semibold"> {productData.price} MAD </span>
        </h2>
      </div>
      {/* Container for product descriptions */}
      <div className="p-3 md:p-4 lg:p-5 xl:px-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
        {/* Displaying short and long descriptions */}
        <h3 className="dark:text-light">{productData.short_description}</h3>
        <h3 className="dark:text-light">{productData.long_description}</h3>
      </div>
      {/* Container for the "Add to Cart" button */}
      <div className="p-3 md:p-4 lg:p-5 xl:px-8 flex justify-end">
        {/* Button for adding font to cart */}
        <Button
          onClick={() =>
            handleAddToCart(
              productData._id,
              customerAuthStore.getState().customerId
            )
          }
          color="primary"
          variant="flat"
          className="w-fit dark:text-primary capitalize"
          endContent={<AddRoundedIcon />}
        >
          {/* Translation for the "add" button */}
          {t("add")}
        </Button>
      </div>
    </div>
  );
};

// Exporting the FontModal component as the default export
export default FontModal;
