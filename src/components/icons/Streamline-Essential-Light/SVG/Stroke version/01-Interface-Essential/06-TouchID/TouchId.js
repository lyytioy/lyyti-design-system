import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchId = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id_svg__a"
      d="M3 12.5v11M16.976 2A9 9 0 003 9.5M21 23.5v-14a8.953 8.953 0 00-1.516-5"
    />,
    <path
      className="touch-id_svg__a"
      d="M18 16V9.5a6 6 0 00-12 0v14M18 23.5V19M9 17.5v6"
    />,
    <path
      className="touch-id_svg__a"
      d="M15 23.5v-14a3 3 0 00-6 0v5M12 10v8M12 21v2.5"
    />
  );

export default SvgTouchId;
