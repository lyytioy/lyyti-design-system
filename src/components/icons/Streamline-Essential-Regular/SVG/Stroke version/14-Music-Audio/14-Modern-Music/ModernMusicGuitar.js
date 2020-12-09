import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicGuitar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-guitar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="modern-music-guitar_svg__a"
      d="M12 .75h2.25a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5h3"
    />,
    <circle
      className="modern-music-guitar_svg__a"
      cx={6.75}
      cy={6.75}
      r={1.5}
    />,
    <path
      className="modern-music-guitar_svg__a"
      d="M8.25 6.75v-4.5l2.25 1.5M6.75 14.25h-6v3h4.5M8.25 11.25v1.5M12 18.75l1.5 1.5M23.107 10.389a.489.489 0 000-.692l-.776-.775a.489.489 0 00-.692 0L16.666 13.9a2.515 2.515 0 00-3.908 1.81c-3.994-.857-5.211 3.539-2.592 6.158s7.01 1.38 6.157-2.593a2.513 2.513 0 001.811-3.908zM2.25 17.25l-1.5 3"
    />
  );

export default SvgModernMusicGuitar;
