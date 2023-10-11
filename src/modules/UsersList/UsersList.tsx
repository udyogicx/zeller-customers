import { ADMIN_USERS_TITLE, MANAGER_USERS_TITLE, USER_TYPES } from "../../constants/constants"
import Title from "../../components/Title"
import Users from "./Users";
import { useUserContext } from "../../contexts/userContext";
import { useMemo } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./style";

const UsersList = () => {
  const classes = useStyles();
  const { selectedType } = useUserContext();

  const title = useMemo(() => {
    switch (selectedType) {
      case USER_TYPES[0]:
        return ADMIN_USERS_TITLE;
      case USER_TYPES[1]:
        return MANAGER_USERS_TITLE;
      default:
        return "";
    }
  }, [selectedType]);

  return (
    <Box className={classes.usersContainer}>
      <Title>{title}</Title>
      <Users />
    </Box>
  );
}

export default UsersList
