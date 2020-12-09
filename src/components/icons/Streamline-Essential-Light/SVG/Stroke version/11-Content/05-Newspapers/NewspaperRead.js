import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperRead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-read_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="newspaper-read_svg__a"
      d="M9.807 10.564c.7-.258.581-2.073.273-2.412a5.128 5.128 0 01-1.336-3.978A3.354 3.354 0 0112 .5a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978c-.308.339-.422 2.155.273 2.412M3.5 11.206a.5.5 0 01.666-.471L12 13.5v10l-8.166-2.882a.5.5 0 01-.334-.471zM20.5 11.206a.5.5 0 00-.666-.471L12 13.5v10l8.166-2.882a.5.5 0 00.334-.471zM5.509 13.708l4.498 1.588M5.504 16.207l4.5 1.588M7.508 19.414l2.465.87M18.49 13.708l-4.497 1.588M18.495 16.207l-4.499 1.588M16.492 19.414l-2.465.87"
    />
  );

export default SvgNewspaperRead;
