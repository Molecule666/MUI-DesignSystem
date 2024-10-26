import React from "react";
import { Box, Chip, ChipProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import { CloseBlueSvg } from "../../../assets";

interface IChipKitProps extends ChipProps {
    colors?: "info" | "error" | "primary" | "secondary";
    height?: number | string;
    disabled?: boolean;
    width?: number | string;
    fontSize?: number;
    borderRadius?: number;
    fontWeight?: number;
    bgColor?: string;
    style?: React.CSSProperties;
}

// Styled Chip component
const StyledChip = styled(Chip, {
    shouldForwardProp: (prop) =>
        ![
            "colors",
            "height",
            "width",
            "fontSize",
            "borderRadius",
            "fontWeight",
            "bgColor",
            "disabled",
        ].includes(prop as string),
})<IChipKitProps>(
    ({ theme, colors, height, width, fontSize, borderRadius, fontWeight, bgColor, disabled }) => ({
        borderRadius: borderRadius ?? theme.shape.borderRadius / 2,
        // fontSize: fontSize ?? theme.typography.subtitle2.fontSize,
        // fontWeight: fontWeight ?? 500,
        // lineHeight: theme.typography.subtitle2.fontSize,
        position: "relative",
        margin: "0 0.4rem",
        padding: "0.3rem 0.3rem",
        height: height,
        width: width,
        backgroundColor: bgColor || undefined,

        "& .MuiChip-label": {
            // padding: 0,
            fontWeight: fontWeight ?? 500,
            // lineHeight: theme.typography.subtitle2.fontSize,
            lineHeight: "1.4rem",
            fontSize: fontSize ?? theme.typography.subtitle2.fontSize,
        },
        "&.MuiChip-colorDefault": {
            backgroundColor:
                theme.palette.mode === "dark" ? theme.palette.grey[500] : theme.palette.grey[50],
            color:
                theme.palette.mode === "dark"
                    ? theme.palette.common.white
                    : theme.palette.grey[600],
            borderColor:
                theme.palette.mode === "dark" ? theme.palette.grey[500] : theme.palette.grey[50],
            cursor: "pointer",
        },
        "& .MuiChip-icon": {
            color: "inherit",
        },
        "& svg": {
            // position: "absolute",
            // right: "-2px",
            // bgColor: "red",
            // right: -10,
        },

        ...(colors === "error" && {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            borderColor: theme.palette.error.main,
        }),
        ...(colors === "secondary" && {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            borderColor: theme.palette.secondary.main,
        }),
        ...(colors === "primary" && {
            backgroundColor: "#E9F2FF",
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
        }),
        ...(colors === "info" && {
            backgroundColor: theme.palette.info.main,
            color: theme.palette.info.contrastText,
            borderColor: theme.palette.info.main,
        }),

        ...(disabled && {
            backgroundColor: "#e7e7e7",
            borderColor: "#e7e7e7",
            color: "#b5afaf",
            cursor: "not-allowed",
            "& svg": {
                fill: "#7e7e7e",
            },
        }),
    })
);

const ChipKit: React.FC<IChipKitProps> = (props) => {
    const {
        colors,
        height,
        disabled,
        width,
        fontSize,
        borderRadius,
        fontWeight,
        bgColor,
        className,
        style,
        ...rest
    } = props;

    return (
        <StyledChip
            className={clsx(className)}
            disabled={disabled}
            deleteIcon={<CloseBlueSvg style={{ width: 14 }} />}
            colors={colors}
            style={{
                ...style,
                height,
                width: props.onDelete ? "auto" : undefined,
                fontSize,
                borderRadius,
                fontWeight,
                backgroundColor: bgColor,
            }}
            {...rest}
        />
    );
};

export default ChipKit;
