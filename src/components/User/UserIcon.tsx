import UserIconContainer from './UserIconContainer';
import UserIconTypo from './UserIconTypo';

type UserIconProps = {
  firstChar: string,
}

const UserIcon = ({ firstChar }: UserIconProps) => {
  return (
    <UserIconContainer>
      <UserIconTypo>{firstChar}</UserIconTypo>
    </UserIconContainer>
  );
}

export default UserIcon;
