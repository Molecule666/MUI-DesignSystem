import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DividerKit } from "components/kit/Divider";
import { ChipKit } from "components/kit/Chip";

const DividerView = () => {
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  const content = (
    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
  );
  return (
    <Box>
      <Typography variant="h2" color="primary" m={4}>
        {"Vertical"}
      </Typography>
      <Box display={"flex"}>
        <Box width={50} height={50} bgcolor={"red"} mx={2} />
        <DividerKit orientation="vertical" flexItem />
        <Box width={50} height={50} bgcolor={"blue"} mx={2} />
        <DividerKit orientation="vertical" variant="middle" flexItem />
        <Box width={50} height={50} bgcolor={"green"} mx={2} />
      </Box>

      <Typography variant="h2" color="primary" mt={4} mx={2}>
        {"Horizontal"}
      </Typography>
      <Box my={4} width={100} mx={2}>
        <Box width={50} height={50} bgcolor={"red"} my={2} />
        <DividerKit component="li" />
        <Box width={50} height={50} bgcolor={"blue"} my={2} />
        <DividerKit variant="inset" />
        <Box width={50} height={50} bgcolor={"green"} my={2} />
        <DividerKit variant="middle" />
        <Box width={50} height={50} bgcolor={"yellow"} my={2} />
      </Box>

      <Root>
        {content}
        <DividerKit></DividerKit>
        {content}
        <DividerKit textAlign="left">LEFT</DividerKit>
        {content}
        <DividerKit textAlign="right">RIGHT</DividerKit>
        {content}
        <DividerKit>
          <ChipKit label="Chip" size="small" />
        </DividerKit>
        {content}
      </Root>
    </Box>
  );
};

export default DividerView;
