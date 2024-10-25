import React from "react";
import clsx from "clsx";
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
    CheckedIndeterminateErrorSvg,
    CheckedIndeterminateSvg,
    CheckedTrueErrorSvg,
    CheckedTrueSvg,
} from "../../../assets";

interface ICheckboxProps extends CheckboxProps {
    label?: React.ReactNode;
    error?: boolean;
    simple?: boolean;
    secondary?: boolean;
    width?: number;
    height?: number;
}

// Styled components to replace makeStyles
const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    userSelect: "none",
    transition: "0.3s all ease",
    margin: 0,
    padding: 0,
    "& .Mui-checked + *": {
        fontWeight: "bold",
    },
}));

const StyledCheckbox = styled(Checkbox, {
    shouldForwardProp: (prop) => prop !== "width" && prop !== "height" && prop !== "simple",
})<{ width?: number; height?: number; simple?: boolean; error?: boolean; checked?: boolean }>(
    ({ theme, width = 18, height = 18, simple, error, checked }) => ({
        "&:hover": {
            backgroundColor: "transparent",
        },
        "& .MuiSvgIcon-root": {
            display: "none",
        },
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        "& .icon": {
            borderRadius: 7,
            width: width,
            height: height,
            border: "solid 1px",
            backgroundColor: simple
                ? theme.palette.mode === "dark"
                    ? theme.palette.grey["50"]
                    : theme.palette.common.white
                : theme.palette.grey[400],
            borderColor: error
                ? theme.palette.error.main
                : checked
                ? theme.palette.primary.main
                : theme.palette.grey[400],
            "&$root.Mui-focusVisible": {
                outline: "2px auto rgba(19,124,189,.6)",
                outlineOffset: 2,
            },
            "&:hover": {
                backgroundColor: "#ebf1f5",
            },
            "&:disabled": {
                boxShadow: "none",
                background: "rgba(206,217,224,.5)",
            },
            [theme.breakpoints.down(600)]: {
                width: 20,
                height: 20,
                borderRadius: 5,
            },
        },
        "& .checkedIcon": {
            backgroundColor: simple ? theme.palette.common.white : theme.palette.info.main,
            "&:before": {
                content: '""',
                display: "block",
                width: 24,
                height: 24,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                [theme.breakpoints.down(600)]: {
                    width: 20,
                    height: 20,
                },
            },
        },
    })
);

const CheckboxKit: React.FC<ICheckboxProps> = (props) => {
    const { width, height, simple, label, error, secondary, ...rest } = props;

    return (
        <StyledFormControlLabel
            control={
                <StyledCheckbox
                    disableRipple
                    color="default"
                    width={width}
                    height={height}
                    simple={simple}
                    error={error}
                    checkedIcon={
                        error ? (
                            <CheckedTrueErrorSvg className={clsx("icon", "checkedIcon")} />
                        ) : (
                            <CheckedTrueSvg className={clsx("icon", "checkedIcon")} />
                        )
                    }
                    indeterminateIcon={
                        error ? (
                            <CheckedIndeterminateErrorSvg className={clsx("icon", "checkedIcon")} />
                        ) : (
                            <CheckedIndeterminateSvg className={clsx("icon", "checkedIcon")} />
                        )
                    }
                    icon={<span className="icon" />}
                    inputProps={{ "aria-label": "decorative checkbox" }}
                    {...rest}
                />
            }
            label={
                error && label
                    ? React.cloneElement(label as React.ReactElement, {
                          style: { color: "error.main" },
                      })
                    : label
            }
        />
    );
};

export default CheckboxKit;

CheckboxKit.defaultProps = { label: "" };
