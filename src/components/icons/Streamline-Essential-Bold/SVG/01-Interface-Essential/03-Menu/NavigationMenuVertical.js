import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={3.25} r={3.25} />,
    <circle cx={12} cy={12} r={3.25} />,
    <circle cx={12} cy={20.75} r={3.25} />
  );

export default SvgNavigationMenuVertical;
