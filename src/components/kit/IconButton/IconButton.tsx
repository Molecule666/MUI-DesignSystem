import {
  Box,
  IconButton,
  IconButtonProps,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import clsx from "clsx";

interface IIconButtonProps extends IconButtonProps {
  children: React.ReactElement;
  size?: "small" | "medium" | "large";
  selected?: boolean;
  popoverText?: string;
  isEdit?: boolean;
  isDelete?: boolean;
  isCheck?: boolean;
  isDefult?: boolean;
  mode?: string;
  fill?: string;
}

const StyledIconButton = styled(IconButton)<IIconButtonProps>(
  ({ theme, size, ...props }) => {
    const backgroundColor = props.fill
      ? props.fill
      : props.isDefult || props.mode === "isDefult"
      ? theme.palette.mode === "dark"
        ? "#313745"
        : theme.palette.grey.A100
      : "transparent";

    const borderColor = props.isDelete
      ? theme.palette.error.main
      : props.isEdit
      ? theme.palette.primary.main
      : props.isCheck
      ? theme.palette.secondary.main
      : "transparent";

    const hoverBackgroundColor = 
      theme.palette.mode === "dark"
        ? props.isDelete
          ? theme.palette.error[80]
          : props.isEdit
          ? theme.palette.primary[80]
          : props.isCheck
          ? theme.palette.secondary[80]
          : theme.palette.primary[80]
        : props.isDelete
        ? theme.palette.error[95]
        : props.isEdit
        ? theme.palette.primary[95]
        : props.isCheck
        ? theme.palette.secondary[95]
        : theme.palette.primary[95];

    return {
      width: size === "small" ? "2.2rem" : size === "medium" ? "3rem" : "4rem",
      height: size === "small" ? "2.2rem" : size === "medium" ? "3rem" : "4rem",
      borderRadius: size === "large" ? "1.2rem" : "0.6rem",
      backgroundColor,
      borderColor,
      padding: "0.7rem",
      transition: "all 0.3s",
      boxShadow:
        props.isDefult || props.mode === "isDefult"
          ? theme.palette.mode === "dark"
            ? "0px 2px 6px 0px rgba(70, 69, 71, 0.10)"
            : "none"
          : "none",
      border: props.isDefult ? "none" : "1px solid transparent",
      "&:hover": {
        backgroundColor: hoverBackgroundColor,
      },
      "&:focus": {
        backgroundColor: props.isDelete
          ? theme.palette.error[90]
          : props.isEdit
          ? theme.palette.primary[90]
          : props.isCheck
          ? theme.palette.secondary[90]
          : theme.palette.primary[90],
      },
      "&:disabled": {
        backgroundColor : theme.palette.grey[300],
      }
    };
  }
);

const StyledPopoverContent = styled(Stack)<IIconButtonProps>(
  ({ theme, ...props }) => ({
    minWidth: "10rem",
    color:
     props.isDelete
      ? theme.palette.error[40]
      : props.isEdit
      ? theme.palette.primary[50]
      : props.isCheck
      ? theme.palette.secondary[60]
      : theme.palette.primary[70],
    backgroundColor:
     props.isDelete
      ? theme.palette.error[50]
      : props.isEdit
      ? theme.palette.primary[50]
      : props.isCheck
      ? theme.palette.secondary[50]
      : theme.palette.primary[50],
  })
);

const IconButtonKit: React.FC<IIconButtonProps> = (props) => {
  const {
    selected,
    size = "medium",
    popoverText,
    children,
    isEdit,
    isDelete,
    isCheck,
    isDefult,
    mode,
    fill,
    ...rest
  } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);


  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    
      <StyledIconButton
        {...rest}
        size={size}
        className={clsx({ selected })}
        isEdit={isEdit}
        isDelete={isDelete}
        isCheck={isCheck}
        isDefult={isDefult}
        mode={mode}
        fill={fill}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {children}
      </StyledIconButton>
      {popoverText && (
        <Popover
          id="mouse-over-popover"
          sx={{ pointerEvents: "none" }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          elevation={0}
        >
          <StyledPopoverContent
            isEdit={isEdit}
            isDelete={isDelete}
            isCheck={isCheck}
            isDefult={isDefult}
            mode={mode}
            fill={fill}
          >

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p={1.5}
              width="100%"
            >
              <Typography fontSize={12} textAlign="center">
                {popoverText}
              </Typography>
            </Box>
          </StyledPopoverContent>
        </Popover>
      )}
    </>
  );
};

export default IconButtonKit;
