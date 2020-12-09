import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkmanPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="walkman-play_svg__a" cx={5.5} cy={7.5} r={5} />,
    <circle className="walkman-play_svg__a" cx={18.5} cy={7.5} r={5} />,
    <path
      className="walkman-play_svg__a"
      d="M15.5 21.5h-7l.774-2.324a1 1 0 01.948-.685h3.558a1 1 0 01.949.685zM6 17.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M18 17.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle className="walkman-play_svg__a" cx={14} cy={14.5} r={1} />,
    <circle className="walkman-play_svg__a" cx={10} cy={14.5} r={1} />,
    <path
      className="walkman-play_svg__a"
      d="M20.5 12.084V19.5a2.006 2.006 0 01-2 2h-13a2.006 2.006 0 01-2-2v-7.416M10.084 9.5h3.832M5.5 6V4.5M18.5 6V4.5M17.201 8.25L15.902 9M19.799 8.25l1.298.75M4.201 8.25L2.902 9M6.799 8.25L8.097 9"
    />
  );

export default SvgWalkmanPlay;
