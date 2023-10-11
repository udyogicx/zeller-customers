import { Box, Typography } from '@material-ui/core';
import { useStyles } from './style';
import { ERROR_TEXT } from '../../constants/constants';

const Error = () => {
  const classes = useStyles();

  return (
    <Box className={classes.errorContainer}>
      <Typography>{ERROR_TEXT}</Typography>
    </Box>
  );
}

export default Error;
