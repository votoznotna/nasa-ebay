import Link from "next/link";

import { IconType } from "react-icons/lib";
interface IMenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}
const MenuItem: React.FC<IMenuItemProps> = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="mx-1 lg:mx-6 hover:text-amber-600">
      <Icon className="text-2xl sm:hidden mx-4" />
      <p className="hidden sm:inline my-2 text-sm">{title}</p>
    </Link>
  );
};
export default MenuItem;
