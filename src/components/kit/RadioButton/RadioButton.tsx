import React from "react";
import { Radio, Box, FormControlLabel, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IRadioButtonKitProps {
  color?: "primary" | "secondary" | "error";
  size?: "small" | "medium";
  label1?: string;
  label2?: string;
  control?: string;
  row?: boolean;
  disabled?: boolean;
}

const StyledRadioButton = styled(Radio)(({ theme, color, disabled }) => ({
    "&.Mui-disabled": {
        color: theme.palette.mode === "dark"
      ? theme.palette.grey[50]
      : theme.palette.grey[400]
    },
    "&:hover": {
      backgroundColor:
        color === "primary" ? theme.palette.primary[95] : theme.palette.error[95],
    },
    "&:focused": {
      backgroundColor:
        color === "primary" ? theme.palette.primary[90] : theme.palette.error[90],
    },
    "&:pressed": {
      backgroundColor: theme.palette.primary[95],
    },
  }));


const RadioButtonKit: React.FC<IRadioButtonKitProps> = (props) => {
//   const theme = useTheme();
  const { label1, label2, color, size, disabled } = props;
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  
  return (
    <Box>
      <FormControlLabel
        control={
          <StyledRadioButton
            checked={selectedValue === "b"}
            color={color}
            onChange={handleChange}
            value="b"
            size={size}
            disabled={disabled}
          />
        }
        label={label1 || "Option B"}
      />
      <FormControlLabel
        control={
          <StyledRadioButton
            checked={selectedValue === "a"}
            color={color}
            onChange={handleChange}
            value="a"
            size={size}
            disabled={disabled}
          />
        }
        label={label2 || "Option A"}
      />
    </Box>
  );
};

export default RadioButtonKit;
