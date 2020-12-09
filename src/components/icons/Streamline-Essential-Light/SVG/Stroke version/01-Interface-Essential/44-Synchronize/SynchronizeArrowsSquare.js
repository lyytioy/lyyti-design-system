import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-square_svg__a"
      d="M6.5 20.5a3 3 0 01-3-3v-11a3 3 0 013-3h8M17.5 3.5a3 3 0 013 3v11a3 3 0 01-3 3h-8"
    />,
    <path
      className="synchronize-arrows-square_svg__a"
      d="M12.5.498l2 3-2 3M11.5 17.498l-2 3 2 3"
    />
  );

export default SvgSynchronizeArrowsSquare;
