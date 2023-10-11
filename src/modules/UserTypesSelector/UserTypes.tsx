import { FormControlLabel, RadioGroup } from "@material-ui/core";
import clsx from "clsx";
import { USER_TYPES } from "../../constants/constants";
import Option from "../../components/Option";
import { useUserContext } from "../../contexts/userContext";
import { useStyles } from "./style";

const UserTypeSelector = () => {
  const classes = useStyles();
  const { selectedType, setSelectedType } = useUserContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <RadioGroup value={selectedType} onChange={handleChange}>
      {USER_TYPES.map((userType) =>
        <FormControlLabel
          key={userType}
          value={userType}
          control={<Option />}
          label={userType}
          className={clsx({
            [classes.checkedLabel]: selectedType === userType,
            [classes.uncheckedLabel]: selectedType !== userType,
          })}
        />
      )}
    </RadioGroup>
  );
}

export default UserTypeSelector
