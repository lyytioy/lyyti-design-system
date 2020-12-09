import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCowboy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-cowboy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-cowboy_svg__a"
      d="M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M16.677 15.5a.313.313 0 01.312.333 5 5 0 01-9.958.223.5.5 0 01.5-.556zM20 6.5l-1.731-4.154A3 3 0 0015.5.5h-7a3 3 0 00-2.769 1.846L4 6.5"
    />,
    <path
      className="smiley-cowboy_svg__a"
      d="M22.914 3.086A2 2 0 0121.5 6.5h-19a2 2 0 01-1.414-3.414M2.511 8.5a10.5 10.5 0 1018.978 0"
    />
  );

export default SvgSmileyCowboy;
