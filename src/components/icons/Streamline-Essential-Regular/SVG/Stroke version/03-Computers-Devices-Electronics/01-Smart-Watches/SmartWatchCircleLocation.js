import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-location_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-location_svg__a"
      d="M13.121 17.031v4.719a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.719M4.121 6.969V2.25a1.5 1.5 0 011.5-1.5h6M14.669 15a6.747 6.747 0 11-4.532-9.579M17.621 4.949a.375.375 0 10.379.375.374.374 0 00-.375-.375"
    />,
    <path
      className="smart-watch-circle-location_svg__a"
      d="M17.621.824a4.5 4.5 0 014.5 4.5c0 1.921-2.688 5.577-3.909 7.138a.751.751 0 01-1.183 0c-1.221-1.562-3.908-5.217-3.908-7.138a4.5 4.5 0 014.5-4.5z"
    />
  );

export default SvgSmartWatchCircleLocation;
