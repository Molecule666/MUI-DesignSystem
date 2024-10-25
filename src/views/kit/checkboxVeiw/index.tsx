import React, { useState } from "react";
import { Box, FormControlLabel } from "@mui/material";
import { CheckboxKit } from "components/kit/Checkbox";

const CheckBoxView = () => {
    const [checkedValue, setCheckedValue] = useState<boolean>(false);

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            <FormControlLabel
                label="Child 1"
                control={
                    <CheckboxKit
                        simple
                        color={"primary"}
                        width={24}
                        height={24}
                        checked={checked[0]}
                        onChange={handleChange2}
                    />
                }
            />

            <FormControlLabel
                label="Child 2"
                sx={{
                    mt: 1,
                }}
                control={
                    <CheckboxKit
                        simple
                        color={"primary"}
                        width={24}
                        height={24}
                        checked={checked[1]}
                        onChange={handleChange3}
                    />
                }
            />
        </Box>
    );

    return (
        <Box>
            <CheckboxKit
                simple
                checked={checkedValue}
                color={"primary"}
                width={24}
                height={24}
                onChange={(event) => setCheckedValue(!checkedValue)}
            />
            <CheckboxKit
                simple
                checked={false}
                indeterminate={false}
                color={"primary"}
                width={24}
                height={24}
                disabled
            />

            <CheckboxKit
                simple
                checked={checkedValue}
                color={"error"}
                width={24}
                height={24}
                onChange={(event) => setCheckedValue(!checkedValue)}
                error
            />
            <Box mt={2}>
                <FormControlLabel
                    label="Parent"
                    control={
                        <CheckboxKit
                            simple
                            color={"primary"}
                            width={24}
                            height={24}
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                {children}
            </Box>

            <Box mt={2}>
                <FormControlLabel
                    label="Parent"
                    control={
                        <CheckboxKit
                            simple
                            error
                            color={"primary"}
                            width={24}
                            height={24}
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                {children}
            </Box>
        </Box>
    );
};

export default CheckBoxView;
