import Checkout from "../Components/Checkout/Checkout";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Conditions from "../Pages/Conditions";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import NewsMedia from "../Pages/NewsMedia";
import Privacy from "../Pages/Privacy";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products";
import Refound from "../Pages/Refound";
import Services from "../Pages/Services";
import PrivateRoutes from "./PrivateRoutes";


const PublicRoutes = [
  { path: "/", Component: Home },
  { path: "/security-check", Component: Services },
  { path: "/products", Component: Products },
  { path: "/news-media", Component: NewsMedia },
  { path: "/blogs", Component: Blogs },
  { path: "/contact", Component: Contact },
  { path: "/privacy-policy", Component: Privacy },
  { path: "/refound-return", Component: Refound },
  { path: "/terms-conditions", Component: Conditions },
  { path: "/products/details", Component: PrivateRoutes, ProductDetails, PrivateRoutes },
  { path: "/Checkout", Component: Checkout },
  
];

export default PublicRoutes;
