import { Typography } from '@material-ui/core';
import { ReactNode } from 'react';

type UserNameTypoProps = {
  children: ReactNode
}

const UserNameTypo = ({children}: UserNameTypoProps) => {
 return <Typography>{children}</Typography>
}

export default UserNameTypo;
