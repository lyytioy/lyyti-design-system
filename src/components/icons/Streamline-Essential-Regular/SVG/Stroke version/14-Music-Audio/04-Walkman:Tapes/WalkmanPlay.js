import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkmanPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="walkman-play_svg__a" cx={15} cy={14.25} r={1.5} />,
    <circle className="walkman-play_svg__a" cx={9} cy={14.25} r={1.5} />,
    <path
      className="walkman-play_svg__a"
      d="M6.311 5.689L4.189 7.811M6.311 7.811L4.189 5.689M19.811 5.689l-2.122 2.122M19.811 7.811l-2.122-2.122M14.25 18.75h-4.5a1.5 1.5 0 00-1.5 1.5v1.5h7.5v-1.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle className="walkman-play_svg__a" cx={18.75} cy={6.75} r={4.5} />,
    <circle className="walkman-play_svg__a" cx={5.25} cy={6.75} r={4.5} />,
    <path
      className="walkman-play_svg__a"
      d="M20.25 10.994v9.256a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-9.256M9.494 8.25h5.012"
    />
  );

export default SvgWalkmanPlay;
