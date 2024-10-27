import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

export interface IDialogKit extends Omit<DialogProps, "open"> {
  title?: string;
  svgIcon?: React.ReactNode;
  cancelTitle?: string;
  confirmTitle?: string;
}

const DialogKit = ({ title, svgIcon, cancelTitle="انصراف", confirmTitle="تایید" }: IDialogKit) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        دیالوگ
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {svgIcon ? (
          <Box sx={{ textAlign: "center" }} mt={3}>
            {svgIcon} <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          </Box>
        ) : (
          <Box mt={3}>
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          </Box>
        )}
        <DialogContent>
          <DialogContentText
            typography={"subtitle2"}
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
            color={"secondary"}
          >
            {cancelTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DialogKit;
