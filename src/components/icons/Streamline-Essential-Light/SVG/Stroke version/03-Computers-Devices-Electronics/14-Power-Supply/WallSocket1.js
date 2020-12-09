import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWallSocket1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wall-socket-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wall-socket-1_svg__a"
      d="M12 13.5a2.288 2.288 0 00-2.5 2v3h5v-3a2.288 2.288 0 00-2.5-2zM7.5 6.5v5M16.5 6.5v5"
    />,
    <path
      className="wall-socket-1_svg__a"
      d="M20.5 2.5h-17c-1.657 0-3 4.254-3 9.5s1.343 9.5 3 9.5h17c1.656 0 3-4.254 3-9.5s-1.344-9.5-3-9.5z"
    />
  );

export default SvgWallSocket1;
