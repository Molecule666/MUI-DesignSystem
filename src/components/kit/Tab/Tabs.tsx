import React from "react";
import {
  Box,
  Popover,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
// import useOrder from "../../../hook/useOrder";
// import useMediaQuerySize from "../../../hook/useMediaQuerySize";

interface StyledTabsProps {
  value: number;
  //   onChange: (event: React.SyntheticEvent, newValue: number) => void;
  children?: React.ReactElement | any[];
  secondary?: boolean;
  tertiary?: boolean;
  differentbtn?: boolean;
  bottomtab?: boolean;
}

const StyledTabs = styled(Tabs)<StyledTabsProps>(
  ({ theme, tertiary, bottomtab }) => ({
    borderBottom: tertiary
      ? theme.palette.mode === "dark"
        ? `1px solid ${theme.palette.grey[400]}`
        : `1px solid ${theme.palette.grey[100]}`
      : "none",
    "& .MuiTabs-indicator": {
      height: tertiary ? "2px" : "calc(100% - 13px)",
      bottom: tertiary ? "0" : "0.65rem",
      backgroundColor: tertiary
        ? theme.palette.primary.main
        : theme.palette.primary.main,
    },
    "& .Mui-selected": {
      color: tertiary ? theme.palette.primary.main : "rgb(255, 255, 255)",
    },
    width: "100%",
    marginTop: bottomtab ? "10px" : 0,
  })
);

interface StyledTabProps {
  label: React.ReactNode;
  secondary?: boolean;
  tertiary?: boolean;
}

const StyledTab = styled(Tab)<StyledTabProps>(
  ({ theme, tertiary, secondary }) => ({
    zIndex: 2,
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    marginRight: theme.spacing(1),
    color: theme.palette.mode === "dark" ? "#fff" : theme.palette.grey[600],
    "&:first-child": {
      margin: 0,
      marginRight: tertiary ? "1.6rem" : "0",
    },
    "&.Mui-selected": {
      color: secondary
        ? theme.palette.common.white
        : tertiary
        ? "#868788"
        : theme.palette.common.white,
    },
    // minHeight: "3.2rem",
  })
);

interface ITabsKit {
  initialValue?: number;
  tabs: {
    title: React.ReactNode;
    children: React.ReactNode;
    key?: number;
    button?: React.ReactNode;
  }[];
  secondary?: boolean;
  tertiary?: boolean;
  paddingX?: string;
  differentbtn?: boolean;
  className?: string;
  hasButton?: boolean;
  bottomtab?: boolean;
  onChangeTabs?: (tab: number) => void;
  variant?: "fullWidth" | "standard" | "scrollable";
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  px?: string;
  popoverText?: string;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  popoverText,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        height="100%"
        role="tabpanel"
        hidden={value !== index}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {value === index && children}
      </Box>
      {popoverText && (
        <Popover
          sx={{ pointerEvents: "none" }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          elevation={0}
        >
          <Stack
            sx={{
              backgroundColor: "background.paper",
              minWidth: "12rem",
              p: 1.5,
            }}
          >
            <Typography fontSize="0.875rem">{popoverText}</Typography>
          </Stack>
        </Popover>
      )}
    </>
  );
};

const TabsKit: React.FC<ITabsKit> = ({
  hasButton,
  className,
  secondary,
  tertiary,
  tabs,
  differentbtn,
  initialValue,
  bottomtab,
  onChangeTabs,
  variant,
}) => {
  const [value, setValue] = React.useState(initialValue || 0);
  //   const { orderData } = useOrder();

  React.useEffect(() => {
    if (initialValue !== undefined) {
      setValue(initialValue);
    }
  }, [initialValue]);

  //   const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
  //     if (!orderData.isEditOrder) {
  //       setValue(newValue);
  //       onChangeTabs && onChangeTabs(newValue);
  //     }
  //   };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChangeTabs && onChangeTabs(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, height: "100%" }}>
      {bottomtab &&
        tabs.map((item, index) => (
          <TabPanel key={index} value={value} index={item.key || index}>
            {item.children}
          </TabPanel>
        ))}
      {hasButton ? (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <StyledTabs
            className={className}
            value={value}
            onChange={handleChange}
            differentbtn={differentbtn}
            secondary={secondary}
            tertiary={tertiary}
            variant={variant}
          >
            {tabs.map((item, index) => (
              <StyledTab
                secondary={secondary}
                tertiary={tertiary}
                key={index}
                label={item.title}
              />
            ))}
          </StyledTabs>
          {tabs.map((item, index) => (
            <TabPanel key={index} value={value} index={item.key || index}>
              {hasButton && (
                <Box sx={{ "& button": { mx: 0.5 } }}>{item.button}</Box>
              )}
            </TabPanel>
          ))}
        </Box>
      ) : (
        <StyledTabs
          className={className}
          value={value}
          onChange={handleChange}
          differentbtn={differentbtn}
          secondary={secondary}
          tertiary={tertiary}
          variant={variant}
          bottomtab={bottomtab}
        >
          {tabs.map((item, index) => (
            <StyledTab
              secondary={secondary}
              tertiary={tertiary}
              key={index}
              label={item.title}
            />
          ))}
        </StyledTabs>
      )}
      {!bottomtab &&
        tabs.map((item, index) => (
          <TabPanel key={index} value={value} index={item.key || index}>
            {item.children}
          </TabPanel>
        ))}
    </Box>
  );
};

export default TabsKit;
