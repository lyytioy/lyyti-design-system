import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCrazyTongue = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-crazy-tongue_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-crazy-tongue_svg__a"
      d="M6.756 21.956a11.25 11.25 0 1110.494 0M6.75 6.75l3 3H6"
    />,
    <path
      className="smiley-crazy-tongue_svg__a"
      d="M17.25 6.75l-3 3H18M15 19.626a7.522 7.522 0 004.35-5.376H4.65A7.522 7.522 0 009 19.626"
    />,
    <path
      className="smiley-crazy-tongue_svg__a"
      d="M12 23.25a3 3 0 01-3-3v-1.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v1.5a3 3 0 01-3 3z"
    />
  );

export default SvgSmileyCrazyTongue;
