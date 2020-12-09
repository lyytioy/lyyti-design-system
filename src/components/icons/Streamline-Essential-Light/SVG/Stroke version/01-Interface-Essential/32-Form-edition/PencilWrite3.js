import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencilWrite3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-write-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pencil-write-3_svg__a"
      d="M19 10.5h3.5a1 1 0 011 1v7a1 1 0 01-1 1h-21a1 1 0 01-1-1v-7a1 1 0 011-1H7"
    />,
    <path
      className="pencil-write-3_svg__a"
      d="M13.161 12.88l-4.949 2.119 2.121-4.949 8.839-8.839L22 4.039l-8.839 8.841zM20.164 5.875l-2.828-2.827M13.161 12.88l-2.828-2.83"
    />
  );

export default SvgPencilWrite3;
