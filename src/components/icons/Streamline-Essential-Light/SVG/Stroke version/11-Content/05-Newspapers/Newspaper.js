import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="newspaper_svg__a"
      d="M23.5 2a1 1 0 00-1-1h-21a1 1 0 00-1 1v20a1 1 0 001 1h21a1 1 0 001-1z"
    />,
    <path
      className="newspaper_svg__a"
      d="M20.5 9a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V4.5A.5.5 0 014 4h16a.5.5 0 01.5.5zM3.5 12.5h7M3.5 15.5h7M3.5 18.5h7M13.5 12.5h7M13.5 15.5h7M13.5 18.5h7"
    />
  );

export default SvgNewspaper;
