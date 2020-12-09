import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".view-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="view-off_svg__a"
      d="M2.783 21l18.75-18M8.964 19.051A9.985 9.985 0 0012 19.5c4.1.069 8.258-2.813 10.824-5.637a1.663 1.663 0 000-2.226A20.568 20.568 0 0019.75 8.88M14.413 6.282A9.549 9.549 0 0012 6c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 000 2.226 20.8 20.8 0 002.6 2.4M8.25 12.75A3.749 3.749 0 0112 9M15.75 12.749A3.75 3.75 0 0112 16.5"
    />
  );

export default SvgViewOff;
