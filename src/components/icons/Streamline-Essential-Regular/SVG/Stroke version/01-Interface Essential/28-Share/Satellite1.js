import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSatellite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".satellite-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="satellite-1_svg__a"
      d="M4.779 13.917a3.75 3.75 0 015.3 5.3zM19.7 8.542a3 3 0 00-.385-4.57 3.112 3.112 0 00-3.971.441l-5.792 5.792a1.5 1.5 0 000 2.121l2.122 2.122a1.5 1.5 0 002.121 0zM21.292 2.708l-1.591 1.591M5.56 19.5a1.5 1.5 0 01-1.06-1.073M8.326 22.737a5.3 5.3 0 01-7.055-7.078M14.856 13.387l2.121 2.121"
    />,
    <rect
      className="satellite-1_svg__a"
      x={17.379}
      y={14.41}
      width={4.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 19.63 18.16)"
    />,
    <path className="satellite-1_svg__a" d="M10.613 9.144L8.492 7.023" />,
    <rect
      className="satellite-1_svg__a"
      x={3.59}
      y={0.621}
      width={4.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 5.84 4.37)"
    />
  );

export default SvgSatellite1;
