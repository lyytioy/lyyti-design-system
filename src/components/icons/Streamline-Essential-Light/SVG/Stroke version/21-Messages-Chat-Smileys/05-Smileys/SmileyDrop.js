import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDrop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-drop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-drop_svg__a"
      d="M17.5 1.9a11.5 11.5 0 106 10.1 11.587 11.587 0 00-.109-1.5"
    />,
    <path
      className="smiley-drop_svg__a"
      d="M15.873 15.5a1 1 0 01.97 1.249 5 5 0 01-9.686 0 1 1 0 01.97-1.249zM18.8 10.108a2.359 2.359 0 00-4 0M9.5 10.108a2.359 2.359 0 00-4 0M23.5 6a2.5 2.5 0 01-5 0C18.5 4.619 21 .5 21 .5s2.5 4.119 2.5 5.5z"
    />
  );

export default SvgSmileyDrop;
