import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, useTheme } from "@mui/material";

export interface IDialogKit extends Omit<DialogProps, "open"> {
  title?: string;
  svgIcon?: React.ReactNode;
  cancelTitle?: string;
  confirmTitle?: string;
  buttonTitle?: string;
}

const DialogKit = ({
  title,
  svgIcon,
  cancelTitle = "انصراف",
  confirmTitle = "تایید",
  buttonTitle,
}: IDialogKit) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const mode = theme.palette.mode ===  "dark" ? theme.palette.common.white : theme.palette.secondary.main;

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonTitle}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {svgIcon ? (
          <Box sx={{ textAlign: "center" }} mt={3}>
            <Box>{svgIcon} </Box>
            <DialogTitle
              id="alert-dialog-title"
              sx={{ fontWeight: 700, fontSize: 18 }}
            >
              {title}
            </DialogTitle>
          </Box>
        ) : (
          <Box mt={3}>
            <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 700 }}>
              {title}
            </DialogTitle>
          </Box>
        )}
        <DialogContent>
          <DialogContentText
            typography={"subtitle1"}
            color={theme.palette.dialog}
            id="alert-dialog-description"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ margin: 1 }}>
          <Button onClick={handleClose} fullWidth variant={"contained"}>
            {confirmTitle}
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            fullWidth
            variant={"outlined"}
            sx={{color: mode, borderColor: mode}}
            
          >
            {cancelTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DialogKit;
