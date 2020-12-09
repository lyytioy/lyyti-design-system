import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-star_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-star_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.218 9.235L14.5 12H17a.613.613 0 01.431 1.069l-2.166 2.135 1.2 2.761a.654.654 0 01-.931.819l-2.9-1.634-2.9 1.634a.654.654 0 01-.931-.819L10 15.208l-2.167-2.135A.611.611 0 018.261 12h2.5l1.284-2.769a.662.662 0 011.173.004z"
    />
  );

export default SvgAppWindowStar;
