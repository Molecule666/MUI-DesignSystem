import React, { useState } from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ButtonKit } from "components/kit/Button";
import { InputKit } from "components/kit/Input";
import { ColorModeContext } from "App";
import CheckBoxView from "views/kit/checkboxVeiw";
import { ChipKit } from "components/kit/Chip";
import DividerView from "./dividerView";
import { TooltipKit } from "components/kit/Tooltip";
import { DialogKit } from "components/kit/Dialog";
import { MessageQuestionDarkSvg, MessageQuestionLightSvg } from "assets";
import { IconButtonKit } from "components/kit/IconButton";

const KitView = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const fillColor = theme.palette.mode ===  "dark" ? <MessageQuestionDarkSvg /> : <MessageQuestionLightSvg />;


  return (
    <Box sx={{ flexGrow: 1 }} padding={4}>
      <ButtonKit variant={"contained"} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? "Dark" : "Light"}
      </ButtonKit>
      <Grid container spacing={2} mt={3}>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"Typography"}</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h1" my={2}>
              {"کارگزاری حافظ h1"}
            </Typography>
            <Typography variant="h2" my={2}>
              {"کارگزاری حافظ h2"}
            </Typography>
            <Typography variant="h3" my={2}>
              {"کارگزاری حافظ h3"}
            </Typography>
            <Typography variant="h4" my={2}>
              {"کارگزاری حافظ h4"}
            </Typography>
            <Typography variant="h5" my={2}>
              {"کارگزاری حافظ h5"}
            </Typography>
            <Typography variant="h6" my={2}>
              {"کارگزاری حافظ h6"}
            </Typography>

            <Typography variant="subtitle1" my={2}>
              {"کارگزاری حافظ subtitle1"}
            </Typography>
            <Typography variant="subtitle2" my={2}>
              {"کارگزاری حافظ subtitle2"}
            </Typography>

            <Typography variant="body1" my={2}>
              {"کارگزاری حافظ body1"}
            </Typography>
            <Typography variant="body2" my={2}>
              {"کارگزاری حافظ body2"}
            </Typography>

            <Typography variant="overline" my={2}>
              {"کارگزاری حافظ overline"}
            </Typography>
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"Button"}</Typography>
            <Divider sx={{ my: 2 }} />
          </Box>
          <Box>
            <Box>
              <ButtonKit variant={"contained"}>{"ثبت سفارش"}</ButtonKit>
              <ButtonKit variant={"secondary"}>{"ثبت سفارش"}</ButtonKit>
              <ButtonKit variant={"outlined"}>{"ثبت سفارش"}</ButtonKit>
              <ButtonKit variant={"text"}>{"ثبت سفارش"}</ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit variant={"contained"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"secondary"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"outlined"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"text"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit variant={"contained"} color={"success"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"secondary"} color={"success"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"outlined"} color={"success"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"text"} color={"success"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit variant={"contained"} color={"warning"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"secondary"} color={"warning"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"outlined"} color={"warning"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"text"} color={"warning"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit variant={"contained"} color={"error"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"secondary"} color={"error"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"outlined"} color={"error"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"text"} color={"error"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit variant={"contained"} color={"info"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"secondary"} color={"info"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"outlined"} color={"info"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"text"} color={"info"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
          </Box>
          <Box my={3}>
            <ButtonKit variant={"contained"} disabled>
              {"ثبت سفارش"}
            </ButtonKit>
            <ButtonKit variant={"secondary"} disabled>
              {"ثبت سفارش"}
            </ButtonKit>
            <ButtonKit variant={"outlined"} disabled>
              {"ثبت سفارش"}
            </ButtonKit>
            <ButtonKit variant={"text"} disabled>
              {"ثبت سفارش"}
            </ButtonKit>
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"Small Button"}</Typography>
            <Divider sx={{ my: 2 }} />
          </Box>
          <Box>
            <Box>
              <ButtonKit size={"small"} variant={"contained"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"outlined"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"text"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit
                size={"small"}
                variant={"contained"}
                color={"secondary"}
              >
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit
                size={"small"}
                variant={"secondary"}
                color={"secondary"}
              >
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit
                size={"small"}
                variant={"outlined"}
                color={"secondary"}
              >
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"text"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit size={"small"} variant={"contained"} color={"success"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"secondary"} color={"success"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"outlined"} color={"success"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"text"} color={"success"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit size={"small"} variant={"contained"} color={"warning"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"secondary"} color={"warning"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"outlined"} color={"warning"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"text"} color={"warning"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit size={"small"} variant={"contained"} color={"error"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"secondary"} color={"error"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"outlined"} color={"error"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"text"} color={"error"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit size={"small"} variant={"contained"} color={"info"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"secondary"} color={"info"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"outlined"} color={"info"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit size={"small"} variant={"text"} color={"info"}>
                {"ثبت سفارش"}
              </ButtonKit>
            </Box>
          </Box>
          <Box my={3}>
            <ButtonKit size={"small"} variant={"contained"} disabled>
              {"ثبت سفارش"}
            </ButtonKit>
            <ButtonKit size={"small"} variant={"secondary"} disabled>
              {"ثبت سفارش"}
            </ButtonKit>
            <ButtonKit size={"small"} variant={"outlined"} disabled>
              {"ثبت سفارش"}
            </ButtonKit>
            <ButtonKit size={"small"} variant={"text"} disabled>
              {"ثبت سفارش"}
            </ButtonKit>
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"Input"}</Typography>
            <Divider sx={{ my: 2 }} />
          </Box>
          <Box>
            <Box>
              <InputKit label={"اعتبار"} />
              <InputKit label={"اعتبار"} disabled />
              <InputKit label={"اعتبار"} isError errorText={"متن ارور"} />
              <InputKit
                label={" نماد مورد نظر"}
                placeholder={"جستجو"}
                // fullWidth
                variant={"outlined"}
                sx={{
                  marginTop: 2,
                }}
              />
            </Box>
            {/* <Box></Box>
                        <Box></Box>
                        <Box mt={2}></Box> */}
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"CheckBox"}</Typography>
            <Divider sx={{ my: 2 }} />
          </Box>
          <Box>
            <CheckBoxView />
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"chips"}</Typography>
            <Divider sx={{ my: 2 }} />
          </Box>
          <Box>
            <ChipKit label="حافظ" colors="primary" />
            <ChipKit label="حافظ" colors="primary" onClick={() => {}} />
            <ChipKit label="حافظ" colors="primary" onDelete={() => {}} />

            <ChipKit label="حافظ" variant={"outlined"} color={"secondary"} />
            <ChipKit label="حافظ" variant={"outlined"} onClick={() => {}} />

            <ChipKit
              label="چاوش سرزمین هوشمند ایرانیان پ"
              variant={"outlined"}
              onDelete={() => {}}
            />

            {/*
                        <ChipKit label="Deletable" variant={"outlined"} onDelete={() => {}} />

                        <ChipKit label="حافظ" disabled />
                        <ChipKit label="حافظ" variant={"outlined"} disabled /> */}
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"Divider"}</Typography>
            <Divider sx={{ my: 2 }} />
            <Box>
              <DividerView />
            </Box>
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"Tooltip"}</Typography>
            <Divider sx={{ my: 2 }} />
            <Box display={"flex"} justifyContent={"space-around"}>
              <TooltipKit title={"top"} placement="top">
                <Typography
                  noWrap
                  sx={{
                    textAlign: "center !important",
                    cursor: "pointer",
                  }}
                >
                  {"single-top"}
                </Typography>
              </TooltipKit>
              <TooltipKit title={"bottom"} placement="bottom">
                <Typography
                  noWrap
                  sx={{
                    textAlign: "center !important",
                    cursor: "pointer",
                  }}
                >
                  {"single-bottom"}
                </Typography>
              </TooltipKit>
              <TooltipKit title={"left"} placement="left">
                <Typography
                  noWrap
                  sx={{
                    textAlign: "center !important",
                    cursor: "pointer",
                  }}
                >
                  {"single-left"}
                </Typography>
              </TooltipKit>
              <TooltipKit title={"right"} placement="right">
                <Typography
                  noWrap
                  sx={{
                    textAlign: "center !important",
                    cursor: "pointer",
                  }}
                >
                  {"single-right"}
                </Typography>
              </TooltipKit>
            </Box>
            <Box mt={8} display={"flex"} justifyContent={"space-around"}>
              <TooltipKit
                title={
                  "Supporting text Body text string goes here psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
                placement="top"
              >
                <Typography
                  noWrap
                  sx={{
                    textAlign: "center !important",
                    cursor: "pointer",
                  }}
                >
                  {"multi line tooltip"}
                </Typography>
              </TooltipKit>
              <TooltipKit
                title={
                  "Supporting text Body text string goes here psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
                placement="bottom"
              >
                <Typography
                  noWrap
                  sx={{
                    textAlign: "center !important",
                    cursor: "pointer",
                  }}
                >
                  {"multi line tooltip"}
                </Typography>
              </TooltipKit>
              <TooltipKit
                title={
                  "Supporting text Body text string goes here psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
                placement="left"
              >
                <Typography
                  noWrap
                  sx={{
                    textAlign: "center !important",
                    cursor: "pointer",
                  }}
                >
                  {"multi line tooltip"}
                </Typography>
              </TooltipKit>
              <TooltipKit
                title={
                  "Supporting text Body text string goes here psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
                placement="right"
              >
                <Typography
                  noWrap
                  sx={{
                    textAlign: "center !important",
                    cursor: "pointer",
                  }}
                >
                  {"multi line tooltip"}
                </Typography>
              </TooltipKit>
            </Box>
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"Dialog"}</Typography>
            <Divider sx={{ my: 2 }} />
            <Box display={"flex"} justifyContent={"space-around"}>
              <Box>
                <DialogKit title="عنوان دیالوگ" buttonTitle="فونت مشکی " />
              </Box>
              <Box>
                <DialogKit
                  title="عنوان دیالوگ"
                  svgIcon={fillColor}
                  buttonTitle="فونت مشکی با آیکون"
                />
              </Box>
              <Box>
                <DialogKit title="عنوان دیالوگ" buttonTitle="فونت طوسی" />
              </Box>
              <Box>
                <DialogKit
                  title="عنوان دیالوگ"
                  svgIcon={fillColor}
                  buttonTitle="فونت طوسی با آیکون"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <Box my={3}>
            <Typography variant="h1">{"IconButton"}</Typography>
            <Divider sx={{ my: 2 }} />
          </Box>
          <Box>
            <Box>
              {/* <IconButtonKit
                className={classes.sideBarIconOpen}
                children={!open ? <MessageQuestionSvg /> : <></>}
                onClick={handleSideBar}
                sx={{ marginLeft: "9px" }}
              /> */}
              {/* <ButtonKit variant={"contained"}>{"ثبت سفارش"}</ButtonKit>
              <ButtonKit variant={"secondary"}>{"ثبت سفارش"}</ButtonKit>
              <ButtonKit variant={"outlined"}>{"ثبت سفارش"}</ButtonKit>
              <ButtonKit variant={"text"}>{"ثبت سفارش"}</ButtonKit>
            </Box>
            <Box mt={2}>
              <ButtonKit variant={"contained"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"secondary"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"outlined"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit>
              <ButtonKit variant={"text"} color={"secondary"}>
                {"ثبت سفارش"}
              </ButtonKit> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default KitView;
