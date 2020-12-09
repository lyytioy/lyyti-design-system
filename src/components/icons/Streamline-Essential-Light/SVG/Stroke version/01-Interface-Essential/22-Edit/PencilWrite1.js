import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencilWrite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-write-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pencil-write-1_svg__a"
      d="M19.5 11.5v11a1 1 0 01-1 1h-17a1 1 0 01-1-1v-19a1 1 0 011-1h13"
    />,
    <path
      className="pencil-write-1_svg__a"
      d="M12.824 14.007l-4.949 2.12 2.121-4.95L20.674.5l2.828 2.828-10.678 10.679zM21.667 5.164l-2.829-2.829M12.824 14.007l-2.828-2.83"
    />
  );

export default SvgPencilWrite1;
