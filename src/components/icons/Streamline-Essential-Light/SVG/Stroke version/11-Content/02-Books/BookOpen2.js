import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookOpen2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-open-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-open-2_svg__a"
      d="M12.016 20.5c0-2 .984-3 2.984-3h5a1 1 0 001-1v-14a1 1 0 00-1-1h-5a2.652 2.652 0 00-3 3 2.652 2.652 0 00-3-3H4a1 1 0 00-1 1v14a1 1 0 001 1h5c2 0 3.016 1 3.016 3z"
    />,
    <path
      className="book-open-2_svg__a"
      d="M21 3.5h1a1 1 0 011 1v14a1 1 0 01-1 1h-5c-2 0-3.5 1-3.5 3h-3c0-2-1.5-3-3.5-3H2a1 1 0 01-1-1v-14a1 1 0 011-1h1M12 4.5V20"
    />
  );

export default SvgBookOpen2;
