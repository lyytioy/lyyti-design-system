import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gift-box_svg__a"
      d="M21.75 11.25H2.25v10.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5zM21.75 6.75H2.25a1.5 1.5 0 00-1.5 1.5v2.25a.75.75 0 00.75.75h21a.75.75 0 00.75-.75V8.25a1.5 1.5 0 00-1.5-1.5zM11.25 6.75c-3.314 0-6.75-2.686-6.75-6M4.5.75c3.314 0 6.75 2.686 6.75 6M12.75 6.75c3.314 0 6.75-2.686 6.75-6M19.5.75c-3.314 0-6.75 2.686-6.75 6"
    />,
    <path className="gift-box_svg__a" d="M9.75 6.75h4.5v16.5h-4.5z" />
  );

export default SvgGiftBox;
