import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvApple = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-apple_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-apple_svg__a"
      d="M19.5 17.5h-15a4 4 0 01-3.964-4.529l1.4-8.146A4 4 0 015.873 1.5h12.254a4 4 0 013.942 3.325l1.395 8.146A4 4 0 0119.5 17.5z"
    />,
    <path
      className="modern-tv-apple_svg__a"
      d="M23.5 13.5v5a4 4 0 01-4 4h-15a4 4 0 01-4-4v-5M8.5 6.5v6M6.5 6.5h4M13.5 6.5l2.5 6 2.5-6"
    />
  );

export default SvgModernTvApple;
