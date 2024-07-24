import { Link } from 'react-router-dom';
import { loginWithFIBUrl } from '../data/loginWithFIBUrl';
import { useAuth } from '../hooks/useAuth';

const ProfileButton = () => {
  const { userData } = useAuth();
  console.log(userData);
  const { englishFirstName } = userData || {};
  return (
    <>
      {userData ? (
        <div className={`rounded-3xl flex gap-1 items-center border border-white sm:!p-2 cursor-pointer`}>
          <img
            src={'/user-avatar.webp'}
            alt="img"
            className="rounded-full w-9 h-9 sm:w-[30px] sm:h-[30px] min-w-9 object-cover"
          />

          <div className=" justify-center items-center hidden sm:flex">
            <p className="mr-1 mt-1 text-lg text-white font-black">{englishFirstName}</p>
          </div>
        </div>
      ) : (
        <Link to={loginWithFIBUrl}>
          <span className="text-white font-semibold">Login with FIB</span>
        </Link>
      )}
    </>
  );
};

export default ProfileButton;
