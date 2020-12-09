import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItBreak = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-break_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-break_svg__a"
      d="M12 21.844l-9.588-10a5.672 5.672 0 01-1.063-6.551 5.673 5.673 0 019.085-1.474L12 5.384l1.566-1.565a5.673 5.673 0 019.085 1.474 5.673 5.673 0 01-1.062 6.548z"
    />,
    <path
      className="love-it-break_svg__a"
      d="M12 5.384l2.937 2.9a.751.751 0 01-.249 1.23L9.8 11.473a.751.751 0 00-.057 1.368l3.925 1.959a.75.75 0 01.376.908L12 21.844"
    />
  );

export default SvgLoveItBreak;
