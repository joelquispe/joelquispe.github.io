import { useRef, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaGithub, FaGitlab, FaYoutube } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import DrawerComp from "../components/drawer.comp";
import { IoDocumentText } from "react-icons/io5";
import PDF from '../../docs/cv_joel.pdf'
const MainLayout = () => {
  const refDrawer = useRef<HTMLDivElement>(null);
  const [isDrawer, setDrawer] = useState(false);
  const onDrawer = () => {
    refDrawer.current?.classList.toggle("scale-0");
    setDrawer(!isDrawer);
  };
  return (
    <>
      <div className="min-h-screen min-w-screen flex flex-col  bg-background  p-5 ">
        <DrawerComp ref={refDrawer} onCloseDrawer={() => onDrawer()} />

        <div
          id="navbar"
          className="text-2xl top-3 left-3 flex gap-x-4 items-center justify-between"
        >
          <div className="flex items-center gap-x-4">
            <div className="text-white cursor-pointer">
              <CgMenuGridR onClick={() => onDrawer()} className="xl:text-3xl" />
            </div>
            <a
              href="https://github.com/joelquispe"
              target="_blank"
              className="text-white cursor-pointer"
            >
              <FaGithub className="xl:text-3xl" />
            </a>
            <a
              href="https://gitlab.com/jquispe"
              target="_blank"
              className="text-white cursor-pointer"
            >
              <FaGitlab className="xl:text-3xl"/>
            </a>
            <a
              href="https://youtube.com/yoecode"
              target="_blank"
              className="text-white cursor-pointer mr-3"
            >
              <FaYoutube className="xl:text-3xl"/>
            </a>
          </div>

          <a href={PDF} target="_blank" className="text-white cursor-pointer flex items-center" rel="noreferrer">
            <IoDocumentText className="mr-2 xl:text-3xl" />
            <p className="text-xl xl:text-2xl">cv</p>
          </a>
        </div>
        <div
          className={`flex-1 flex   transition-all duration-500 delay-75 ease-in-out ${
            isDrawer ? "blur-md" : "blur-none"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
