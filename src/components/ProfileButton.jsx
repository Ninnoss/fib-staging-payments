import { useAuth } from '../hooks/useAuth';

const ProfileButton = () => {
  const { userData } = useAuth();
  console.log(userData);
  return (
    <div className={`rounded-3xl flex gap-1 items-center border border-gray-800 sm:!p-1`}>
      <img
        src={'avatar'}
        alt="img"
        className="rounded-full w-9 h-9 sm:w-[30px] sm:h-[30px] min-w-9 object-cover"
      />

      <div className=" justify-center items-center hidden sm:flex">
        <p className="mr-1 mt-1 font-black">{'name'}</p>
      </div>
    </div>
  );
};

export default ProfileButton;
