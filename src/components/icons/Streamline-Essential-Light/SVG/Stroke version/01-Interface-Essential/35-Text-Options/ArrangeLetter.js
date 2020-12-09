import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArrangeLetter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arrange-letter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="arrange-letter_svg__a"
      d="M5.5 4.498v15M2.5 16.498l3 3 3-3M20.4 23.5h-3.6a.5.5 0 01-.424-.765l4.044-6.47A.5.5 0 0020 15.5h-3.6M16.5 9.5v-6a2 2 0 014 0v6M16.5 5.498h4"
    />
  );

export default SvgArrangeLetter;
