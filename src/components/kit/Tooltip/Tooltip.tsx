import React, { FC } from "react";
import {
  Tooltip,
  TooltipProps,
  useTheme,
  styled,
  Typography,
} from "@mui/material";
import clsx from "clsx";

interface ITooltipKitProps extends TooltipProps {
  tooltipClassName?: string;
  open?: boolean;
  title: string;
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    fontSize: "12px",
    fontWeight: 500,
    borderRadius: "8px",
    backgroundColor: theme.palette.tooltip,
    padding: "8px 16px",
  },
  "& .MuiTooltip-arrow": {
    color: theme.palette.tooltip,
  },
}));

const TooltipKit: FC<ITooltipKitProps> = (props) => {
  const theme = useTheme();

  return (
    <StyledTooltip
      arrow
      placement={props.placement}
      title={
        <Typography
          sx={{
            color: "#ffffff",
            textAlign: "center !important",
            cursor: "pointer",
          }}
        >
          {props.title}
        </Typography>
      }
      className={clsx(props.className, props.tooltipClassName)}
      onOpen={props.onOpen}
      disableFocusListener={props.open}
      disableHoverListener={props.open}
      disableTouchListener={props.open}
    >
      {props.children}
    </StyledTooltip>
  );
};

export default TooltipKit;
