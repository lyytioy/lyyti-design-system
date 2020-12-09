import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSatelliteSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".satellite-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="satellite-signal_svg__a" d="M14.856 13.387l2.121 2.121" />,
    <rect
      className="satellite-signal_svg__a"
      x={17.379}
      y={14.41}
      width={4.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 19.63 18.16)"
    />,
    <path className="satellite-signal_svg__a" d="M10.613 9.144L8.492 7.023" />,
    <rect
      className="satellite-signal_svg__a"
      x={3.59}
      y={0.621}
      width={4.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 5.84 4.372)"
    />,
    <circle className="satellite-signal_svg__a" cx={12.75} cy={11.25} r={3} />,
    <path
      className="satellite-signal_svg__a"
      d="M2.947 10.447a7.5 7.5 0 1010.606 10.606M5.6 13.1a3.75 3.75 0 005.3 5.3"
    />
  );

export default SvgSatelliteSignal;
