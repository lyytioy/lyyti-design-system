import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIpodPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ipod-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ipod-play_svg__a"
      d="M2.5 4.5a2 2 0 012-2M.5 4.5a4 4 0 014-4M21.5 4.5a2 2 0 00-2-2M23.5 4.5a4 4 0 00-4-4"
    />,
    <rect
      className="ipod-play_svg__a"
      x={5.5}
      y={4.505}
      width={13}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="ipod-play_svg__a"
      d="M10.257 8.46a.5.5 0 00-.757.428v4.234a.5.5 0 00.757.429l3.528-2.117a.5.5 0 000-.858zM5.5 16.505h13"
    />,
    <circle className="ipod-play_svg__a" cx={12} cy={20.005} r={1.5} />
  );

export default SvgIpodPlay;
