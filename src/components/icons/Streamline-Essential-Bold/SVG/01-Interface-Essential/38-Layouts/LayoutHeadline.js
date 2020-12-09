import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutHeadline = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect y={0.747} width={24} height={5.5} rx={1.5} ry={1.5} />,
    <rect y={9.247} width={24} height={5.5} rx={1.5} ry={1.5} />,
    <rect y={17.747} width={24} height={5.5} rx={1.5} ry={1.5} />
  );

export default SvgLayoutHeadline;
