import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={2} cy={11.998} r={2} />,
    <circle cx={22} cy={11.998} r={2} />,
    <circle cx={7.5} cy={11.998} r={2.5} />,
    <circle cx={15} cy={11.998} r={4} />
  );

export default SvgLoadingLine;
