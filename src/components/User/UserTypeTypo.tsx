import { Typography } from '@material-ui/core';
import { ReactNode } from 'react';

type UserTypeTypoProps = {
  children: ReactNode
}

const UserTypeTypo = ({children}: UserTypeTypoProps) => {
 return <Typography color="textSecondary">{children}</Typography>
}

export default UserTypeTypo;
