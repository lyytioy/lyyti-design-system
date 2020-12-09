import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingLine1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={4} cy={11.998} r={4} />,
    <circle cx={14} cy={11.998} r={3} />,
    <circle cx={22} cy={11.998} r={2} />
  );

export default SvgLoadingLine1;
