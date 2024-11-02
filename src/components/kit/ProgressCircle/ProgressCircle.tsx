import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  CircularProgress,
  CircularProgressProps,
  useTheme,
} from "@mui/material";

interface IProgressCircleKitProps {
  color?: "primary" | "secondary" | "error";
  value?: number;
  variant?: "determinate" | "indeterminate" | undefined;
}

// function CircularProgressWithLabel(
//   props: CircularProgressProps & {
//     value: number;
//     color?: "primary" | "secondary" | "error";
//   }
// ) {
//   return (
//     <Box sx={{ position: "relative", display: "inline-flex" }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: "absolute",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Typography
//           variant="caption"
//           component="div"
//           color={props.color}
//         >{`${Math.round(props.value)}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

const ProgressCircleKit: React.FC<IProgressCircleKitProps> = (props) => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState<number>(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box mt={6} display={"flex"} justifyContent={"space-around"}>
        {/* <Box>
          <CircularProgressWithLabel
            value={progress}
            variant={props.variant}
            color={props.color}
          />
        </Box> */}
        <Box ml={6}>
          <CircularProgress
            variant={props.variant}
            value={props.value}
            color={props.color}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressCircleKit;
