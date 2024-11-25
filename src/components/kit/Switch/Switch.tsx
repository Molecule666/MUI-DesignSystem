import React from "react";
import { Box, Switch, SwitchProps, styled } from "@mui/material";
import { SwitchOff, SwitchOn } from "components/icons";

interface ISwitchProps extends Omit<SwitchProps, "size"> {
  iconOn?: React.ReactNode;
  iconOff?: React.ReactNode;
  customSize?: "large" | "small";
}

const CustomSwitch = styled(({ iconOn, iconOff, ...props }: ISwitchProps) => (
  <Switch
    {...props}
    icon={
      iconOff ? (
        <Box
          position={"absolute"}
          sx={{
            backgroundColor: "grey",
            width: "20px",
            height: "20px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          left={"30%"}
          top={"5px"}
        >
          {iconOff}
        </Box>
      ) : (
        <Box position={"absolute"} left={"50%"} top={"8px"}>
          <SwitchOff />
        </Box>
      )
    }
    checkedIcon={
      iconOn ? (
        <Box position={"absolute"} right={"50%"} top={"4px"}>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "100px",
              backgroundColor: "#fff",
              position: "absolute",
              right: "0",
            }}
          ></Box>
          <Box sx={{ position: "absolute", right: "0" }}>{iconOn}</Box>
        </Box>
      ) : (
        <Box position={"absolute"} right={"50%"} top={"4px"}>
          <SwitchOn />
        </Box>
      )
    }
  />
))(
  ({
    theme,
  }: {
    theme: any;
    iconOn?: React.ReactNode;
    iconOff?: React.ReactNode;
  }) => ({
    padding: 0,
    width: 52,
    height: 32,
    ".MuiSwitch-input": {
      height: "32px",
    },
    "& .MuiSwitch-switchBase": {
      transform: "translateX(20px)",

      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        position: "absolute",
        left: "0",
        "& + .MuiSwitch-track": {
          backgroundColor: "#1976d2",
          opacity: 1,
          border: "none",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      width: 28,
      height: 28,
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "inherit",
    },
    "& .MuiSwitch-track": {
      borderRadius: "100px",
      backgroundColor: theme.palette.background.tableOdd,
      left: "0",
      border: `1px solid ${theme.palette.grey[200]}`,
      opacity: 1,
      position: "relative",
    },
    "& .MuiSwitch-track::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

const SwitchKit: React.FC<ISwitchProps> = ({
  iconOn,
  iconOff,
  customSize = "large",
  ...props
}) => {
  return (
    <Box position="relative">
      <CustomSwitch iconOn={iconOn} iconOff={iconOff} {...props} />
    </Box>
  );
};

export default SwitchKit;
