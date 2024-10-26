import React from "react";
import { Divider, DividerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IDividerKitProps extends DividerProps {
}

const StyledDivider = styled(Divider)(({ theme }) => ({
}));

const DividerKit: React.FC<IDividerKitProps> = (props) => {
  const { ...rest } = props;

  return <StyledDivider {...rest} />;
};

export default DividerKit;
