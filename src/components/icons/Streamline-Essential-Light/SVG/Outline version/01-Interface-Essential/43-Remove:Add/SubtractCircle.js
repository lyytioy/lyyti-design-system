import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.5C5.659 23.5.5 18.341.5 12S5.659.5 12 .5 23.5 5.659 23.5 12 18.341 23.5 12 23.5zm0-22C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M6 12.5a.5.5 0 010-1h12a.5.5 0 010 1H6z" />
  );

export default SvgSubtractCircle;
