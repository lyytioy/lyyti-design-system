import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentInkPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-ink-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-ink-pen_svg__a"
      d="M6.705 21.959C5.416 23.247.871 23.125.871 23.125s-.122-4.545 1.167-5.833a3.3 3.3 0 014.667 4.667z"
    />,
    <path
      className="content-ink-pen_svg__a"
      d="M7.766 18.352l-2.122-2.121 3.713-6.894 10.991-8.124a1.741 1.741 0 012.267.169 1.742 1.742 0 01.169 2.267L14.66 14.64z"
    />
  );

export default SvgContentInkPen;
