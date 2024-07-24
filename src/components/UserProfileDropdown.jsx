import { Link } from 'react-router-dom';
import { loginWithFIBUrl } from '../data/loginWithFIBUrl';
import { useAuth } from '../hooks/useAuth';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const UserProfileDropdown = () => {
  const { userData } = useAuth();
  const { englishFirstName } = userData || {};

  return (
    <>
      {userData ? (
        <Menu>
          <MenuButton className="rounded-3xl flex gap-1 items-center border border-white sm:!p-2 cursor-pointer">
            <img
              src={'/user-avatar.webp'}
              alt="img"
              className="rounded-full w-9 h-9 sm:w-[30px] sm:h-[30px] min-w-9 object-cover"
            />
            <div className="justify-center items-center hidden sm:flex">
              <p className="mr-1 mt-1 text-lg text-white font-black">{englishFirstName}</p>
            </div>
          </MenuButton>

          <MenuItems
            anchor="bottom"
            className="absolute right-0 mt-2 w-28 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm data-[focus]:bg-gray-100">
                Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/logout"
                className="block px-4 py-2 text-sm data-[focus]:bg-gray-100">
                Logout
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      ) : (
        <Link to={loginWithFIBUrl}>
          <span className="text-white font-semibold">Login with FIB</span>
        </Link>
      )}
    </>
  );
};

export default UserProfileDropdown;
