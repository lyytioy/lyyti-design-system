import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-lock_svg__a"
      d="M20.093 13.5V3.167A1.667 1.667 0 0018.426 1.5H5.76a1.667 1.667 0 00-1.667 1.667V13.5M15.593 13.5c0 1.1-1.567 2-3.5 2s-3.5-.9-3.5-2H1.779a.5.5 0 00-.464.686 5.28 5.28 0 004.9 3.314H17.97a5.28 5.28 0 004.9-3.314.5.5 0 00-.464-.686z"
    />,
    <path
      className="laptop-lock_svg__a"
      d="M10.093 11.5h4a1 1 0 001-1v-3a1 1 0 00-1-1h-4a1 1 0 00-1 1v3a1 1 0 001 1zM12.093 3.5a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2z"
    />,
    <path
      className="laptop-lock_svg__a"
      d="M12.093 8.77a.25.25 0 10.25.25.25.25 0 00-.25-.25M12.093 17.5v5M3.593 22.5h17"
    />
  );

export default SvgLaptopLock;
