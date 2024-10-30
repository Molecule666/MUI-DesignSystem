import React, { useEffect, useState } from "react";
import {
  Box,
  LinearProgressProps,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { LinearProgress, useTheme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

interface IProgressBarKitProps {
  color?: "primary" | "secondary" | "error";
  value?: number;
  variant?: "determinate" | "indeterminate" | undefined;
}

// function LinearProgressWithLabel(
//   props: LinearProgressProps & {
//     value: number;
//     color?: "primary" | "secondary" | "error";
//     variant?: "determinate" | "indeterminate" | undefined;
//   }
// ) {
//   return (
//     <Box sx={{ display: "flex", alignItems: "center", direction: "rtl" }}>
//       <Box sx={{ width: "100%", ml: 1 }}>
//         <LinearProgress variant={props.variant} color={props.color} />
//       </Box>
//       <Box sx={{ minWidth: 35 }}>
//         <Typography variant="subtitle1">{`${Math.round(
//           props.value
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

const ProgressBarKit: React.FC<IProgressBarKitProps> = (props) => {
  const theme = useTheme();
  const customTheme = createTheme({
    ...theme, // کپی کردن تم پیش‌فرض
    direction: "ltr",
  });


  const [progress, setProgress] = React.useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100
          ? 0
          : Math.min(prevProgress + Math.random() * 10, 100)
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ width: "100%" }}>
        <Box mt={6}>
          <LinearProgress
            variant={props.variant}
            value={props.value}
            color={props.color}
          />
        </Box>
        {/* <Box mt={6}>
        <LinearProgressWithLabel
          color={props.color}
          variant={props.variant}
          value={progress}
        />
      </Box> */}
      </Box>
    </ThemeProvider>
  );
};

export default ProgressBarKit;
