import { useMemo } from "react";
import User from "../../components/User";
import { useUserContext } from "../../contexts/userContext";
import { USER_TYPES } from "../../constants/constants";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Users = () => {
  const {
    selectedType,
    adminUsers,
    managerUsers,
    usersLoading,
    usersLoadingError,
  } = useUserContext();

  const usersList = useMemo(() => {
    switch (selectedType) {
      case USER_TYPES[0]:
        return adminUsers;
      case USER_TYPES[1]:
        return managerUsers;
      default:
        return [];
    }
  }, [selectedType, adminUsers, managerUsers]);

  if (usersLoading) return <Loader />;

  if (usersLoadingError) return <Error />;

  return (
    <>
      {usersList.map(({ name, id }) => 
        <User key={id} userName={name} userType={selectedType} />)}
    </>
  );
}

export default Users
