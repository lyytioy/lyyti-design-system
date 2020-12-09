import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="share_svg__a"
      d="M8.074 10.212a4 4 0 100 3.574M19.5 8.5a4.01 4.01 0 10-3.575-2.213M15.925 17.712A4 4 0 1019.5 15.5"
    />,
    <path
      className="share_svg__a"
      d="M19.5 8.5a4 4 0 01-3.575-2.213l-7.851 3.925a3.963 3.963 0 010 3.575l7.851 3.926A4 4 0 0119.5 15.5"
    />
  );

export default SvgShare;
