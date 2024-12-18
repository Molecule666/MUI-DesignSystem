import React, { useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ButtonKit } from "components/kit/Button";
import { InputKit } from "components/kit/Input";
import { ColorModeContext } from "App";
import Icon1 from "@mui/icons-material/AccessAlarmsTwoTone";
import Icon2 from "@mui/icons-material/AbcSharp";
import CheckBoxView from "views/kit/checkboxVeiw";
import { ChipKit } from "components/kit/Chip";
import SwitchExample from "./switchView";
import { ListItemKit } from "components/kit/ListItem";
import { DropdownKit } from "components/kit/Dropdown";
import ModalSheet from "components/kit/ModalSheet/ModalSheet";

const KitView = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const items = [
    { text: "Item 1", leftIcon: <Icon1 />, rightIcon: <Icon2 /> },
    { text: "Item 2", leftIcon: <Icon1 />, rightIcon: <Icon2 /> },
  ];
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

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
          <SwitchExample />
        </Grid>

        <Grid size={6} border={1} borderRadius={2} p={1}>
          <ListItemKit text="Item 1" leftIcon={<Icon1 />} />
          <ListItemKit text="Item 2" rightIcon={<Icon2 />} />
          <ListItemKit text="Item 3" />{" "}
        </Grid>

        <Grid size={6} border={1} borderRadius={2} p={1}>
          <DropdownKit items={items} label={"انتخاب"} />
        </Grid>
        <Grid size={6} border={1} borderRadius={2} p={1}>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen()}
            >
              open{" "}
            </Button>

            <ModalSheet
              open={openModal}
              onClose={() => setOpenModal(false)}
              label="انتخاب کنید"
              description={"توضیحات"}
              children={
                <DropdownKit
                  items={items}
                  label={"label"}
                  multiple={true}
                  searchable={true}
                />
              }
            />
          </div>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default KitView;
