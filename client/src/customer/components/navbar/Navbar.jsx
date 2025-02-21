// Importing React hooks, components, and icons from libraries
import { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { Button } from "@nextui-org/react";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import mainStore from "../../../store/mainStore";
import { Link, useLocation } from "react-router-dom";
import navData from "./NavData"; // Assuming there is a file with navigation data
import { useTranslation } from "react-i18next";
import "./navbar.css";

// React functional component for the client-specific navbar
function ClientNavbar() {
  // Destructuring required functions and objects from main store
  const { closeNav } = mainStore();
  const { t } = useTranslation();

  // Using React Router's useLocation to get the current pathname
  const location = useLocation();
  const [currentPathname, setCurrentPathname] = useState("");

  // useEffect to update the current pathname when the location changes
  useEffect(() => {
    setCurrentPathname(location.pathname);
  }, [location.pathname]);

  // Generating menu items based on the navigation data
  const MenuItems = () => {
    return navData.map((item, index) => (
      <div key={index} className="relative">
        {item.sub ? (
          <div className="dropdown-new">
            <Button
              key={index}
              as={Link}
              to={item.url}
              onClick={closeNav}
              color="primary"
              variant={"light"}
              className="w-fit dark:text-white capitalize"
            >
              {t(item.title)}
            </Button>

            {/* Dropdown (Hidden by default, appears on hover) */}
            <div className="dropdown-menu-new">
              {item.sub.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.url}
                  className="block px-4 py-2 text-gray-100  capitalize"
                >
                  {t(subItem.title)}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Button
            key={index}
            as={Link}
            to={item.url}
            onClick={closeNav}
            color="primary"
            variant={"light"}
            className="w-fit dark:text-white capitalize"
          >
            {t(item.title)}
          </Button>
        )}
      </div>
    ));
  };

  // Generating the "Login" button for the end of the navbar
  const endButton = (
    <Button
      as={Link}
      to="/login"
      onClick={closeNav}
      color="primary"
      variant="solid"
      className="w-fit dark:text-white capitalize"
      endContent={<LoginRoundedIcon />}
    >
      {t("account")}
    </Button>
  );

  // Rendering the Navbar component with the generated menu items and end button
  return <Navbar menuItems={<MenuItems />} endButton={endButton} />;
}

// Exporting the ClientNavbar component as the default export
export default ClientNavbar;
