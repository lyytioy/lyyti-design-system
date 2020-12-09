import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterTextAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={8} y={4.497} width={11.5} height={2.5} rx={0.75} ry={0.75} />,
    <rect x={8} y={8.997} width={11.5} height={2.5} rx={0.75} ry={0.75} />,
    <rect x={8} y={13.497} width={6.5} height={2.5} rx={0.75} ry={0.75} />,
    <path d="M22 0H5.5a2 2 0 00-2 2v16.5a2 2 0 002 2H22a2 2 0 002-2V2a2 2 0 00-2-2zm-.145 18.354a.5.5 0 01-.354.146H6a.5.5 0 01-.5-.5V2.5A.5.5 0 016 2h15.5a.5.5 0 01.5.5V18a.5.5 0 01-.145.351z" />,
    <path d="M19.5 22h-17a.5.5 0 01-.5-.5v-17a1 1 0 00-2 0V22a2 2 0 002 2h17.5a1 1 0 000-2z" />
  );

export default SvgPaginateFilterTextAlternate;
