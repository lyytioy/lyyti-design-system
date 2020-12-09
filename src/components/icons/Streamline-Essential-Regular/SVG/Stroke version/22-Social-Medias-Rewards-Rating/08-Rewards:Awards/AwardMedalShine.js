import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedalShine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal-shine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="award-medal-shine_svg__a" cx={12} cy={14.25} r={4.5} />,
    <path
      className="award-medal-shine_svg__a"
      d="M12 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M8.202 11.839L.75 5.25l3-4.5 5.687 9.728M15.798 11.839L23.25 5.25l-3-4.5-5.686 9.728M3.75.75h16.5M14.25 5.25h-4.5M12 23.25v-1.5M18.364 20.614l-1.06-1.061M5.636 20.614l1.061-1.061M19.5 15H21M3 15h1.5"
    />
  );

export default SvgAwardMedalShine;
