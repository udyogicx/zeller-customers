import { Box } from '@material-ui/core';
import UserIcon from './UserIcon';
import UserNameTypo from './UserNameTypo';
import { useStyles } from './style';
import UserTypeTypo from './UserTypeTypo';

type UserProps = {
  userName: string,
  userType: string,
}

const User = ({ userName, userType }: UserProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.userMainContainer}>
      <UserIcon firstChar={userName[0]} />
      <Box className={classes.userSubContainer}>
        <UserNameTypo>{userName}</UserNameTypo>
        <UserTypeTypo>{userType}</UserTypeTypo>
      </Box>
    </Box>
  );
}

export default User;
