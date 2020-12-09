import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiDelete = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-delete_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-delete_svg__a"
      d="M3 7.624a8.945 8.945 0 0112.653 0M18.216 4.169a12.527 12.527 0 00-17.716 0M15.656 7.624A8.945 8.945 0 003 7.624M12.3 10.417a5.372 5.372 0 00-6.794.66M9.358 17.5a1.79 1.79 0 010-3.579"
    />,
    <circle className="wifi-delete_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="wifi-delete_svg__a"
      d="M19.621 15.379l-4.242 4.242M19.621 19.621l-4.242-4.242"
    />
  );

export default SvgWifiDelete;
