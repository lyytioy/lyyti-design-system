import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.5 10.915a1.5 1.5 0 003 0V1.5a1.5 1.5 0 10-3 0z" />,
    <path d="M1.2 11.533a10.917 10.917 0 0018.52 9.272 10.825 10.825 0 003.08-9.278A11.021 11.021 0 0017.067 3.4a1.5 1.5 0 10-1.437 2.63 8.048 8.048 0 014.2 5.925A7.914 7.914 0 016.4 18.684a7.854 7.854 0 01-2.237-6.726A8.042 8.042 0 018.36 6.036a1.5 1.5 0 10-1.441-2.631A11.015 11.015 0 001.2 11.533z" />
  );

export default SvgPowerButton;
