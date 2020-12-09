import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvWide = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-wide_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-wide_svg__a"
      d="M1 4h22a.5.5 0 01.5.5v13H1a.5.5 0 01-.5-.5V4.5A.5.5 0 011 4zM3 17.5L1.5 20M21 17.5l1.5 2.5"
    />
  );

export default SvgModernTvWide;
