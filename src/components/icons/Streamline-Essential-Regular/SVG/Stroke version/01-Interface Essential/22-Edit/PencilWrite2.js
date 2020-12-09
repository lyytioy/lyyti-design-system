import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencilWrite2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-write-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pencil-write-2_svg__a"
      d="M12.667 14.136l-3.712.531.53-3.713 9.546-9.546a2.25 2.25 0 013.182 3.182z"
    />,
    <path
      className="pencil-write-2_svg__a"
      d="M19.122 14.25v7.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h7.5"
    />
  );

export default SvgPencilWrite2;
