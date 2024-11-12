import React, { useState, useRef, useEffect } from "react";
import {
  List,
  TextField,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Checkbox,
  ListItem,
  useTheme,
  InputAdornment,
} from "@mui/material";

import { ListItemKit } from "../ListItem";
import { ArrowDown, ArrowUp, Search } from "components/icons";

interface Item {
  text: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

interface DropdownProps {
  items: Item[];
  label: string;
  multiple?: boolean;
  searchable?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  label,
  multiple = false,
  searchable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedItems, setSelectedItems] = useState<Item[]>(
    multiple ? [] : [items[0]]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelectItem = (item: Item) => {
    if (multiple) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.some(
          (selectedItem) => selectedItem.text === item.text
        )
          ? prevSelectedItems.filter(
              (selectedItem) => selectedItem.text !== item.text
            )
          : [...prevSelectedItems, item]
      );
    } else {
      setSelectedItems([item]);
      setIsOpen(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedText = multiple
    ? selectedItems.map((item) => item.text).join(", ")
    : selectedItems[0]?.text || "";
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <FormControl fullWidth variant="outlined" ref={dropdownRef}>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        sx={{
          height: "56px",
          width: "245px",
          cursor: "pointer",
          "& .MuiInputBase-input": {
            cursor: "pointer",
          },
        }}
        onClick={handleToggle}
        endAdornment={
          <IconButton size="small" onClick={handleToggle}>
            {isOpen ? (
              <ArrowUp color={isDarkMode ? "white" : "#37465C"} />
            ) : (
              <ArrowDown color={isDarkMode ? "white" : "#37465C"} />
            )}
          </IconButton>
        }
        value={selectedText}
        readOnly
        label={label}
      />
      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            width: "245px",
            maxHeight: "200px",
            overflowY: "auto",
            borderRadius: "8px",
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            boxShadow: 3,
            zIndex: 1,
            top: "55px",
          }}
        >
          {searchable && (
            <TextField
              variant="outlined"
              size="small"
              placeholder="جستجو"
              fullWidth
              value={searchText}
              onChange={handleSearchChange}
              sx={{
                padding: "10px 10px",
                "& .MuiInputBase-root": {
                  height: "40px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color={isDarkMode ? "white" : "#37465C"} />
                  </InputAdornment>
                ),
              }}
            />
          )}
          <List>
            {filteredItems.map((item, index) => (
              <ListItem
                key={index}
                component="div"
                onClick={() => handleSelectItem(item)}
              >
                {multiple && (
                  <Checkbox
                    checked={selectedItems.some(
                      (selectedItem) => selectedItem.text === item.text
                    )}
                  />
                )}
                <ListItemKit
                  text={item.text}
                  leftIcon={item.leftIcon}
                  rightIcon={item.rightIcon}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </FormControl>
  );
};

export default Dropdown;
