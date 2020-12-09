import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencil1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pencil-1_svg__a"
      d="M6.966 21.983L.5 23.5l1.517-6.465L17.964 1.086a2 2 0 012.829 0l2.122 2.121a2 2 0 010 2.829zM22.21 6.745l-4.953-4.952M20.783 8.172l-4.941-4.965M7.218 21.733l-4.95-4.95"
    />
  );

export default SvgPencil1;
