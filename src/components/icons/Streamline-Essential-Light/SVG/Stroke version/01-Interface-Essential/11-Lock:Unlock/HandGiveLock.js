import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHandGiveLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hand-give-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hand-give-lock_svg__a"
      d="M.5 23.5v-10M.5 15.5h7a3 3 0 013 3h6a3 3 0 013 3H.5zM10.5 18.5h-3"
    />,
    <rect
      className="hand-give-lock_svg__a"
      x={13.5}
      y={5.5}
      width={10}
      height={9}
      rx={1}
      ry={1}
    />,
    <path className="hand-give-lock_svg__a" d="M15.5 5.5v-2a3 3 0 016 0v2" />,
    <circle className="hand-give-lock_svg__a" cx={18.5} cy={10} r={1.5} />
  );

export default SvgHandGiveLock;
