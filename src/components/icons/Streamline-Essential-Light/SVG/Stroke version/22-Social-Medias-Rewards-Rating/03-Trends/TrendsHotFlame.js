import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsHotFlame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-hot-flame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="trends-hot-flame_svg__a"
      d="M10.747.884a.5.5 0 00-.679.669C11.883 5.1 11.69 9.959 9.205 12.7a6.568 6.568 0 01-1.5-3.029c-5.9 4.225-2.789 13.5 4.5 13.5 10.47.004 9.073-16.706-1.458-22.287z"
    />,
    <path
      className="trends-hot-flame_svg__a"
      d="M12.705 14.175c.99 1.763-1.512 4.294-3 3.944a2.494 2.494 0 002.454 2.056c3.624 0 3.229-5 .546-6z"
    />
  );

export default SvgTrendsHotFlame;
