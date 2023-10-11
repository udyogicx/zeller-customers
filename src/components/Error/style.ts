import { createStyles, makeStyles } from '@material-ui/core/';

export const useStyles = makeStyles(() =>
  createStyles({
    errorContainer: {
      backgroundColor: '#fceded',
      color: 'red',
      padding: '24px 8px',
      border: '1px solid red',
    },
  })
);
