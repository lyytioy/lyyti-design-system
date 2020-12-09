import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-badge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="check-badge_svg__a"
      d="M15.75 9.749l-3.981 5.308a.75.75 0 01-1.13.08L8.25 12.749"
    />,
    <path
      className="check-badge_svg__a"
      d="M10.73 1.357a1.63 1.63 0 012.54 0l1.512 1.881a1.629 1.629 0 001.446.6l2.4-.261a1.63 1.63 0 011.8 1.8l-.261 2.4a1.629 1.629 0 00.6 1.446l1.881 1.512a1.63 1.63 0 010 2.54l-1.887 1.505a1.632 1.632 0 00-.6 1.447l.261 2.4a1.629 1.629 0 01-1.8 1.8l-2.4-.261a1.628 1.628 0 00-1.446.6L13.27 22.64a1.629 1.629 0 01-2.54 0l-1.511-1.88a1.631 1.631 0 00-1.447-.6l-2.4.261a1.628 1.628 0 01-1.8-1.8l.261-2.4a1.631 1.631 0 00-.6-1.447l-1.88-1.511a1.629 1.629 0 010-2.54l1.88-1.512a1.628 1.628 0 00.6-1.446l-.261-2.4a1.629 1.629 0 011.8-1.8l2.4.261a1.632 1.632 0 001.447-.6z"
    />
  );

export default SvgCheckBadge;
