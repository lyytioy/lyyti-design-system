import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.146 15.852A.5.5 0 004.5 16a.512.512 0 00.191-.038A.5.5 0 005 15.5V13a.25.25 0 01.25-.25h6.25a1.25 1.25 0 000-2.5H5.25A.25.25 0 015 10V7.5a.5.5 0 00-.854-.354l-4 4a.5.5 0 000 .707z" />,
    <rect x={15.5} y={-0.001} width={8.5} height={24} rx={2} ry={2} />
  );

export default SvgMoveLeft;
