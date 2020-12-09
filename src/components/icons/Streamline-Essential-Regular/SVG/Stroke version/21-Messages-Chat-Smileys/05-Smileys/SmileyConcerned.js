import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyConcerned = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-concerned_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-concerned_svg__a"
      d="M17.25 6.5l-1.095.657a2.41 2.41 0 01-1.238.343h-.667M12 18.75A6.75 6.75 0 0118.048 15M15.75 10.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.5 10.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M6 7.553a1.8 1.8 0 013 0"
    />,
    <circle className="smiley-concerned_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgSmileyConcerned;
