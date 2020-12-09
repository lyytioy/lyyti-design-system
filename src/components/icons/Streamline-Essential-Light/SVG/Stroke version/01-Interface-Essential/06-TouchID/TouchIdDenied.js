import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-denied_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-denied_svg__a"
      d="M18.487 9.007a8.96 8.96 0 00-2.28-5.507M.5 11.5v3A9 9 0 006 22.794M14 1.706A9 9 0 00.514 9M7 4.044a6 6 0 018.5 5.428"
    />,
    <path
      className="touch-id-denied_svg__a"
      d="M10 20.48c-.164.013-.33.02-.5.02a6 6 0 01-6-6v-5a5.977 5.977 0 011.528-4"
    />,
    <path
      className="touch-id-denied_svg__a"
      d="M12.5 11.051V9.5a3 3 0 00-6 0v3M6.5 14.5a3 3 0 003 3M9.5 9.5v3M9.5 14.5v1M9.5 23.5a9.01 9.01 0 001.964-.215"
    />,
    <circle className="touch-id-denied_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="touch-id-denied_svg__a"
      d="M19.621 15.379l-4.242 4.243M19.621 19.622l-4.242-4.243"
    />
  );

export default SvgTouchIdDenied;
