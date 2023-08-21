import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { FaHome, FaRegImages } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import MenuItem from "./MenuItem";
import DarkModeSwitch from "@/components/DarkModeSwitch";

const Header: React.FC = () => (
  <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center pt-6 pb-3 border-b border-grey-900 border-b-1">
    <div className="flex items-center space-x-5">
      <a href="http://www.nasa.gov" target="_blank" title="visit nasa.gov">
        <h2 className="text-l flex  items-center">
          <Image
            src={`/nasa-logo.svg`}
            width={50}
            height={50}
            className="rounded-lg"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="NASA"
          ></Image>
          <span className="text-m">NASA Science Mars Exploration Program</span>
        </h2>
      </a>
    </div>
    <div className="flex items-center">
      <DarkModeSwitch />
      <MenuItem title="About" address="/" Icon={FaHome} />
      <MenuItem title="Images by Date" address="/images" Icon={FaRegImages} />
      {/* <MenuItem
        title="Mars Weather"
        address="/weather"
        Icon={TiWeatherPartlySunny}
      /> */}
    </div>
  </div>
);

export default Header;
