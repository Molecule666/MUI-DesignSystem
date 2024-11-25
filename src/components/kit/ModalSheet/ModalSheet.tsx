import React from "react";
import { Modal, Box, IconButton, Typography, useTheme } from "@mui/material";
import { Close } from "components/icons";

interface ModalSheetProps {
  open: boolean;
  onClose: () => void;
  label?: string;
  children: React.ReactNode;
  description?: string;
}

const ModalSheet: React.FC<ModalSheetProps> = ({
  open,
  onClose,
  label = "",
  description = "",
  children,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "692px",
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          height: "332px",
          overflowY: "auto",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px !important",
                fontWeight: "bold ",
              }}
            >
              {label}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", fontWeight: 400 }}
            >
              {description}{" "}
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <Close color={isDarkMode ? "white" : "#37465C"} />
          </IconButton>
        </Box>

        <Box>{children}</Box>
      </Box>
    </Modal>
  );
};

export default ModalSheet;
