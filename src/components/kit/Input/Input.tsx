import { FilledInputProps, FormHelperText, TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import clsx from "clsx";

interface IInputKitProps {
    textarea?: boolean;
    isError?: boolean;
    errorText?: string;
    splitNumber?: boolean;
    textColor?: string;
    isFullHeight?: boolean;
    notMargin?: boolean;
}

// Styled components to replace makeStyles
const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiFilledInput-root": {
        height: "100%", // This applies when isFullHeight is true
    },
    // "& .Mui-error": {
    //     borderColor: theme.palette.error.main, // Styling for error state
    // },
}));

const StyledHelperText = styled(FormHelperText)(({ theme }) => ({
    // color: theme.palette.error.main,
    marginTop: theme.spacing(1),
}));

const InputKit: React.FC<IInputKitProps & TextFieldProps> = (props) => {
    const {
        InputProps,
        textarea,
        isError,
        errorText,
        textColor,
        isFullHeight,
        notMargin,
        ...rest
    } = props;

    return (
        <div
            style={{
                marginBottom: !props?.notMargin ? (!isError ? "16px" : "1px") : 0,
                width: "100%",
                display: props?.notMargin ? "flex" : "block",
            }}
        >
            <StyledTextField
                multiline={textarea}
                rows={textarea ? 4 : undefined}
                InputProps={
                    {
                        ...InputProps,
                        classes: {
                            ...InputProps?.classes,
                            root: clsx(InputProps?.classes?.root, {
                                "Mui-error": isError, // Apply error styles conditionally
                            }),
                        },
                    } as Partial<FilledInputProps>
                }
                sx={{
                    ...(isFullHeight && { "& .MuiFilledInput-root": { height: "100%" } }),
                    ...(textColor && { "& .MuiInputBase-input": { color: textColor } }), // Custom text color
                    textAlign: "right",
                }}
                {...rest}
            />
            {isError && (
                <StyledHelperText
                // variant={"filled"}
                // sx={{ textAlign: "right", fontSizeAdjust: "0.8rem" }}
                >
                    {errorText}
                </StyledHelperText>
            )}
        </div>
    );
};

export default InputKit;
