import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import customerAuthStore from "../../store/authentication/CustomerAuthStore";
import { googleLogout } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import mainStore from "../../store/mainStore";
import accountMenuData from "../../customer/pages/account/menu/MenuData";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccountDropdown() {
  const { logout, googleLoggedIn } = customerAuthStore();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { closeNav } = mainStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      closeNav();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogout = async () => {
    await googleLogout();
    await logout();
    navigate("/login");
    closeNav();
  };

  return (
    <div className="relative z-20 ml-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" h-10 px-4  rounded-full bg-[#46d1c9] flex items-center justify-center"
      >
        Account
        {/* <ExpandMoreIcon /> */}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-md">
          <ul className="py-2 ">
            <li>
              <Link
                to="/account"
                onClick={() => {
                  closeNav();
                  setIsOpen(false);
                }}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {t("my account")}
              </Link>
            </li>
            {accountMenuData
              .filter((item) => item.priority)
              .map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    onClick={() => {
                      closeNav();
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            <li>
              <button
                onClick={googleLoggedIn ? handleGoogleLogout : handleLogout}
                className="w-full text-left block px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                {t("log out")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AccountDropdown;
