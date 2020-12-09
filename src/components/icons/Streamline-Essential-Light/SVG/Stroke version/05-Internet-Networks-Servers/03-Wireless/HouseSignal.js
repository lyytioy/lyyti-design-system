import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouseSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="house-signal_svg__a"
      d="M7.5 18.5V23a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-4.5M4.5 17l7.5-6.5 7.5 6.5M15.5 10.5H17a.5.5 0 01.5.5v1.5"
    />,
    <path
      className="house-signal_svg__a"
      d="M13.5 20a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v3.5h3zM15.409 7.5a4.918 4.918 0 00-6.818 0M17.455 5.511a7.869 7.869 0 00-10.91 0M19.5 3.521a10.82 10.82 0 00-15 0"
    />
  );

export default SvgHouseSignal;
