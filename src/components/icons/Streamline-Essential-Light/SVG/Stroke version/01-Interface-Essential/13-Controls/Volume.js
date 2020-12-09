import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolume = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="volume_svg__a" cx={12} cy={14.001} r={7.5} />,
    <circle className="volume_svg__a" cx={13.25} cy={10.751} r={1.25} />,
    <path
      className="volume_svg__a"
      d="M3 10a1 1 0 111-1M20 9a1 1 0 111 1M21 18a1 1 0 11-1 1M4 19a1 1 0 11-1-1M11.293 4.208a1 1 0 111.414 0"
    />
  );

export default SvgVolume;
