import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIndentDecrease = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".indent-decrease_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="indent-decrease_svg__a"
      d="M23.5 2.498h-18M23.5 22.498h-18M23.5 18.498H10M23.5 14.498H10M23.5 10.498H10M23.5 6.498H10M7.5 7.834a.5.5 0 00-.832-.374L1.42 12.124a.5.5 0 000 .748l5.248 4.664a.5.5 0 00.832-.374z"
    />
  );

export default SvgIndentDecrease;
