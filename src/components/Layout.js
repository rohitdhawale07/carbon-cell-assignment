import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import { motion } from "framer-motion";

function Layout({ children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <div className="flex">
        <div className=" m-0 hidden sm:block md:block lg:block xl:block">
          <SideNav  />
        </div>
        <SideDrawer className="m-0" isOpen={isOpen} onClose={onClose} />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-grow mx-auto sm:ml-[256px]"
        >
          <TopNav onOpen={onOpen} />
          <div className=" max-w-[77rem] mx-auto">{children}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default Layout;
