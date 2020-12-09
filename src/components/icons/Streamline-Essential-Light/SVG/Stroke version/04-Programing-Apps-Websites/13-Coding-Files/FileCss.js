import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCss = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-css_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-css_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-css_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M8.5 18.5a3 3 0 010-6M13.5 12.5h-1.7a1.3 1.3 0 00-.723 2.386l1.84 1.227A1.3 1.3 0 0112.2 18.5h-1.7M18.5 12.5h-1.7a1.3 1.3 0 00-.723 2.386l1.84 1.227A1.3 1.3 0 0117.2 18.5h-1.7"
    />
  );

export default SvgFileCss;
