import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={3.25} cy={12} r={3.25} />,
    <circle cx={12} cy={12} r={3.25} />,
    <circle cx={20.75} cy={12} r={3.25} />
  );

export default SvgNavigationMenuHorizontal;
