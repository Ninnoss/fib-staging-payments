import { useAuth } from '../hooks/useAuth';

const UserProfile = () => {
  const { userData } = useAuth();

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { phoneNumber, englishFirstName, englishLastName, firstName, lastName, dateOfBirth, gender, iban } =
    userData;

  return (
    <div className="max-w-2xl mx-auto p-4  rounded-lg py-16 md:py-28">
      <h1 className="text-2xl mb-10 font-bold text-darkerGreen">User Profile</h1>
      <div className="mb-4">
        <strong>Phone Number:</strong> <span>{phoneNumber}</span>
      </div>
      <div className="mb-4">
        <strong>First Name (English):</strong> <span>{englishFirstName}</span>
      </div>
      <div className="mb-4">
        <strong>Last Name (English):</strong> <span>{englishLastName}</span>
      </div>
      <div className="mb-4">
        <strong>First Name:</strong> <span>{firstName}</span>
      </div>
      <div className="mb-4">
        <strong>Last Name:</strong> <span>{lastName}</span>
      </div>
      <div className="mb-4">
        <strong>Date of Birth:</strong> <span>{dateOfBirth}</span>
      </div>
      <div className="mb-4">
        <strong>Gender:</strong> <span>{gender}</span>
      </div>
      <div className="mb-4">
        <strong>IBAN:</strong> <span>{iban}</span>
      </div>
    </div>
  );
};

export default UserProfile;
