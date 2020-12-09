import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusAuto = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-auto_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="focus-auto_svg__a"
      d="M21.9 11.293l-2.4-2.4V5.5a1 1 0 00-1-1h-3.393l-2.4-2.4a1 1 0 00-1.414 0l-2.4 2.4H5.5a1 1 0 00-1 1v3.394l-2.4 2.4a1 1 0 000 1.414l2.4 2.4V18.5a1 1 0 001 1h3.393l2.4 2.4a1 1 0 001.414 0l2.4-2.4H18.5a1 1 0 001-1v-3.394l2.4-2.4a1 1 0 000-1.413z"
    />,
    <path
      className="focus-auto_svg__a"
      d="M9.5 16.5V9a2.5 2.5 0 015 0v7.5M9.5 11.5h5"
    />
  );

export default SvgFocusAuto;
