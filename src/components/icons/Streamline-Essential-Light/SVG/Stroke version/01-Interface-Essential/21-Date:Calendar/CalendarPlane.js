import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarPlane = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-plane_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-plane_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-plane_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23M17.433 12.042a1.381 1.381 0 01.99.889 1.294 1.294 0 01.077.44 1.364 1.364 0 01-.637 1.181l-7.853 4.876a.483.483 0 01-.532-.015L6.6 17.392a.266.266 0 01-.04-.374.24.24 0 01.045-.045l1.208-1.065a.266.266 0 01.257-.044l1.514.9 1.92-1.34-3.64-2.25a.332.332 0 01-.037-.467.357.357 0 01.053-.05L8.769 12a.33.33 0 01.312-.044L14.1 13.82l2.32-1.583a1.289 1.289 0 011.013-.195z"
    />
  );

export default SvgCalendarPlane;
