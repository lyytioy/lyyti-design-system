import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSatellite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".satellite-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="satellite-1_svg__a"
      d="M17.935 10.307a3 3 0 00-4.243-4.243l-4.6 4.6a1 1 0 000 1.415l2.833 2.821a1 1 0 001.414 0z"
    />,
    <path
      className="satellite-1_svg__a"
      d="M10.51 19.146a4 4 0 00-5.656-5.657.5.5 0 000 .707l4.946 4.95a.5.5 0 00.71 0z"
    />,
    <circle className="satellite-1_svg__a" cx={20.41} cy={3.589} r={1} />,
    <path
      className="satellite-1_svg__a"
      d="M19.703 4.296l-1.768 1.768M5.561 20.56a1.5 1.5 0 01-2.122-2.121M7.328 22.328a4 4 0 01-5.656-5.657"
    />,
    <rect
      className="satellite-1_svg__a"
      x={2.621}
      y={2.328}
      width={8}
      height={4}
      rx={1}
      ry={1}
      transform="rotate(45 6.62 4.327)"
    />,
    <path className="satellite-1_svg__a" d="M9.45 7.156l1.575 1.575" />,
    <rect
      className="satellite-1_svg__a"
      x={15.672}
      y={15.378}
      width={8}
      height={4}
      rx={1}
      ry={1}
      transform="rotate(-135 19.671 17.378)"
    />,
    <path className="satellite-1_svg__a" d="M16.843 14.55l-1.575-1.576" />
  );

export default SvgSatellite1;
