import { USER_TYPES_TITLE } from "../../constants/constants"
import Title from "../../components/Title"
import UserTypes from "./UserTypes";

const UserTypeSelector = () => {
  return (
    <>
      <Title>{USER_TYPES_TITLE}</Title>
      <UserTypes />
    </>
  );
}

export default UserTypeSelector
