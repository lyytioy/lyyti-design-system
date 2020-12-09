import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutCornersDashboard1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={5} cy={5} r={5} />,
    <circle cx={19} cy={5} r={5} />,
    <circle cx={5} cy={19} r={5} />,
    <circle cx={19} cy={19} r={5} />
  );

export default SvgLayoutCornersDashboard1;
