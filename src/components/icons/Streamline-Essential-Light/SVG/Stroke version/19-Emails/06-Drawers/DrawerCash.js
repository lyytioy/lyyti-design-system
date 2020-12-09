import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-cash_svg__a"
      d="M13.5 5.5h-1.7a1.3 1.3 0 00-.723 2.387l1.84 1.226A1.3 1.3 0 0112.2 11.5h-1.7M12.5 5.5v-1M11.5 12.5v-1"
    />,
    <path
      className="drawer-cash_svg__a"
      d="M19.5 14.5v-13a1 1 0 00-1-1h-13a1 1 0 00-1 1v13M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 16.5l4-6M19.5 10.5l4 6"
    />
  );

export default SvgDrawerCash;
