import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./Navbar.css";
import { useSelector } from "react-redux";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/user",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/inventory",
    name: "Product",
    icon: <MdMessage />,
  },
  {
    path: "/orderform",
    name: "OrderForm",
    icon: <BiAnalyse />,
  },
  {
    path: "/orderlist",
    name: "Orderlist",
    icon: <BsCartCheck />,
  },
];

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const { authSlice } = useSelector((state) => ({ ...state }));

  if (authSlice && authSlice.token)
    return (
      <>
        <div className="main-container">
          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",
              height: "90vh",
              transition: {
                duration: 0.3,
                type: "tween",
                damping: 10,
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.123)",
              },
            }}
          >
            <div className="top_section">
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                    style={{ color: "black" }}
                  >
                    Inventory
                  </motion.h1>
                )}
              </AnimatePresence>

              <div className="bars">
                <FaBars onClick={toggle} />
              </div>
            </div>
            <div className="search">
              <div className="search_icon">
                <BiSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.input
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={inputAnimation}
                    type="text"
                    placeholder="Search"
                  />
                )}
              </AnimatePresence>
            </div>
            <section className="routes">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    // className="link"
                    activeClassName="active"
                    className="ag"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>

          <main>{children}</main>
        </div>
      </>
    );
};

export default Navbar;
