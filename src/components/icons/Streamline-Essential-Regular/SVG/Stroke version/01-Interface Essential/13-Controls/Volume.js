import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolume = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="volume_svg__a" cx={12.001} cy={14.813} r={7.5} />,
    <path
      className="volume_svg__a"
      d="M14.251 10.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="volume_svg__a" cx={2.251} cy={9} r={1.5} />,
    <circle className="volume_svg__a" cx={2.251} cy={20.25} r={1.5} />,
    <circle className="volume_svg__a" cx={21.751} cy={20.25} r={1.5} />,
    <circle className="volume_svg__a" cx={21.751} cy={9} r={1.5} />,
    <circle className="volume_svg__a" cx={12.001} cy={3} r={1.5} />
  );

export default SvgVolume;
