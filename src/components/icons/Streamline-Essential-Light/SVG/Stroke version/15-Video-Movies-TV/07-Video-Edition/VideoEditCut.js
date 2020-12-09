import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditCut = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-cut_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="video-edit-cut_svg__a" cx={3} cy={7.5} r={2.5} />,
    <circle className="video-edit-cut_svg__a" cx={3} cy={16.5} r={2.5} />,
    <path
      className="video-edit-cut_svg__a"
      d="M8.5 11.5V3a1 1 0 011-1h13a1 1 0 011 1v18a1 1 0 01-1 1h-13a1 1 0 01-1-1v-5"
    />,
    <path
      className="video-edit-cut_svg__a"
      d="M20.5 2v8h-9V2M11.5 22v-4.5M13.5 14h7v8M11.5 6h-3M11.5 10h-3M23.5 6h-3M23.5 10h-3M23.5 18h-3M23.5 14h-3M2.361 9.917l12.628 7.484M2.361 14.082L7 11.333"
    />
  );

export default SvgVideoEditCut;
