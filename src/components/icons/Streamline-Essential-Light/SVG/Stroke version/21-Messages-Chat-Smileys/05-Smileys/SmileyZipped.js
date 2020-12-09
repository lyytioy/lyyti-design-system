import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyZipped = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-zipped_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-zipped_svg__a"
      d="M8.5 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 7.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M16.5 16.5v1M6.5 16.5h12M7.5 15.5v1M8.5 17.5v-1M10.5 17.5v-1M11.5 16.5v-1M13.5 16.5v-1M9.5 16.5v-1M12.5 17.5v-1M14.5 17.5v-1M15.5 16.5v-1"
    />,
    <path
      className="smiley-zipped_svg__a"
      d="M23.449 13c.029-.33.051-.662.051-1a11.518 11.518 0 10-3.249 8"
    />,
    <path
      className="smiley-zipped_svg__a"
      d="M22 15c-.975 0-3.5.434-3.5 1.5S21.025 18 22 18a1.5 1.5 0 000-3z"
    />
  );

export default SvgSmileyZipped;
