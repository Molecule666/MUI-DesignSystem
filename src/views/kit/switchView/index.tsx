import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { SwitchKit } from "components/kit/Switch";
import { Close } from "components/icons";

const SwitchExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h3>Enabled Switch with Custom Icons</h3>
      <SwitchKit checked={isChecked} onChange={handleToggle} />

      <h3>Disabled Switch</h3>
      <SwitchKit
        checked={isChecked}
        onChange={handleToggle}
        iconOn={<CheckIcon color="action" />}
        iconOff={<Close color="action" />}
      />

      <h3>Default Switch without Custom Icons</h3>
      <SwitchKit checked={isChecked} onChange={handleToggle} />
    </div>
  );
};

export default SwitchExample;
