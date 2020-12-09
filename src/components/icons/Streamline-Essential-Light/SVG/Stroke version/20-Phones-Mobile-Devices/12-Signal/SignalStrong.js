import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalStrong = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-strong_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="signal-strong_svg__a"
      x={0.5}
      y={13.5}
      width={3}
      height={6}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="signal-strong_svg__a"
      x={5.5}
      y={10.5}
      width={3}
      height={9}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="signal-strong_svg__a"
      x={10.5}
      y={7.5}
      width={3}
      height={12}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="signal-strong_svg__a"
      x={15.5}
      y={4.5}
      width={3}
      height={15}
      rx={0.5}
      ry={0.5}
    />,
    <path className="signal-strong_svg__a" d="M20.5 19.5h3" />
  );

export default SvgSignalStrong;
