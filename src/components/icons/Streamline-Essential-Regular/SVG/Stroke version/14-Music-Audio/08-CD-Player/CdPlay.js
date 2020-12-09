import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cd-play_svg__a"
      d="M16.422 14.265A7.875 7.875 0 118.6 7.5a8.064 8.064 0 011.3.1"
    />,
    <circle className="cd-play_svg__a" cx={8.625} cy={15.375} r={2.625} />,
    <circle className="cd-play_svg__a" cx={13.875} cy={10.294} r={1.875} />,
    <circle className="cd-play_svg__a" cx={21.375} cy={8.044} r={1.875} />,
    <path
      className="cd-play_svg__a"
      d="M15.75 10.294V3.5a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0123.25 2.25v5.794"
    />,
    <circle className="cd-play_svg__a" cx={2.25} cy={5.25} r={1.5} />,
    <path className="cd-play_svg__a" d="M3.75.75v4.5" />
  );

export default SvgCdPlay;
