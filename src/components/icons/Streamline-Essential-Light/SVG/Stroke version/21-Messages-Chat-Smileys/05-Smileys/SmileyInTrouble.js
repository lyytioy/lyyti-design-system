import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyInTrouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-in-trouble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-in-trouble_svg__a"
      d="M17.5 1.9a11.5 11.5 0 106 10.1 11.587 11.587 0 00-.109-1.5"
    />,
    <path
      className="smiley-in-trouble_svg__a"
      d="M23.5 6a2.5 2.5 0 01-5 0C18.5 4.619 21 .5 21 .5s2.5 4.119 2.5 5.5zM8.5 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 7.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.5 19a4.5 4.5 0 019 0"
    />
  );

export default SvgSmileyInTrouble;
