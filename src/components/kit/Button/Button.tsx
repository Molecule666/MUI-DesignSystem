import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import clsx from "clsx";

interface IButtonProps extends ButtonProps {
    dragged?: boolean;
}

const StyledButton = styled(Button)(({ theme }) => ({
    "&.dragged": {
        boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14)",
        "&.MuiButton-outlined": {
            backgroundColor: "rgba(248, 209, 47, 0.04)",
        },
        "&.MuiButton-text": {
            backgroundColor: "rgba(248, 209, 47, 0.04)",
            boxShadow: "unset",
        },
    },
    "& .MuiTouchRipple-child": {
        backgroundColor: "rgba(255, 255, 255, 0.38)",
    },
}));

const ButtonKit: React.FC<IButtonProps> = (props) => {
    const { dragged, children, ...rest } = props;

    return (
        <StyledButton className={clsx({ dragged })} {...rest}>
            {children}
        </StyledButton>
    );
};

export default ButtonKit;
