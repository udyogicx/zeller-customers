import { Typography } from '@material-ui/core';
import { ReactNode } from 'react';

type UserIconTypoProps = {
  children: ReactNode
}

const UserIconTypo = ({children}: UserIconTypoProps) => {
 return <Typography color="primary">{children}</Typography>
}

export default UserIconTypo;
