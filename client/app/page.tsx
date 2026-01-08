import Image from "next/image";
import { title } from "process";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";
import { RiTwitterXLine } from "react-icons/ri";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
  },
  {
    title: "Explore",
    icon: <IoSearchOutline />,
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <HiOutlineMail />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Communities",
    icon: <HiOutlineUsers />,
  },
  {
    title: "Premium",
    icon: <RiTwitterXLine />,
  },
  {
    title: "Profile",
    icon: <HiOutlineUser />,
  },
  {
    title: "More",
    icon: <HiOutlineDotsCircleHorizontal />,
  },
];

export default function Home() {
  return (
    <div>
      
      <div className="grid grid-cols-12 h-full w-full">

        {/* Sidebar */}
        <div className="col-span-3 border-r-2 border-slate-500 flex flex-col items-end pt-8 px-6 gap-6">

          {/* Twitter Icon */}
          <div className="text-white text-3xl p-3 hover:bg-slate-400 rounded-full justify-start cursor-pointer transition-all">
            <FaSquareXTwitter />
          </div>

          {/* Menu */}
          <ul className="flex flex-col gap-4 justify-end">
            {SideBarMenuItems.map((item) => (
              <li
                key={item.title}

                className="flex items-center gap-2 text-white text-xl p-3 rounded-full hover:bg-slate-400 cursor-pointer transition-all"
              >
                <span className="text-2xl w-8 flex justify-center " >{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <button className="bg-amber-50 text-black font-semibold w-48 p-4 rounded-full text-center">
            Post
          </button>

        </div>

        {/* Main feed */}
        <div className="col-span-6 border-r border-l border-white"></div>

        {/* Right section */}
        <div className="col-span-3"></div>

      </div>
    </div>
  );
}
