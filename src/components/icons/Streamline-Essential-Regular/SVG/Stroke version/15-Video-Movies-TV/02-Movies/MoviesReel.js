import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesReel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-reel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="movies-reel_svg__a" cx={15} cy={9} r={8.25} />,
    <path className="movies-reel_svg__a" d="M15 17.25H3.75a3 3 0 000 6h19.5" />,
    <circle className="movies-reel_svg__a" cx={15} cy={9} r={2.25} />,
    <path
      className="movies-reel_svg__a"
      d="M18.182 5.818l1.061-1.061M11.818 12.182l-1.061 1.061M18.182 12.182l1.061 1.061M11.818 5.818l-1.061-1.061"
    />
  );

export default SvgMoviesReel;
