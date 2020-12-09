import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodHappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-happy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mood-happy_svg__a"
      d="M12.767.5a10.717 10.717 0 00-9.115 16.381L.5 23.5l6.619-3.152A10.729 10.729 0 1012.767.5z"
    />,
    <path
      className="mood-happy_svg__a"
      d="M8.75 9.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.75 9.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.25 13a2.5 2.5 0 01-5 0z"
    />
  );

export default SvgMoodHappy;
