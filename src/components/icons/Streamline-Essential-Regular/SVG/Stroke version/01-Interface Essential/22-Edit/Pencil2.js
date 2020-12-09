import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencil2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pencil-2_svg__a"
      d="M22.192 1.814a3.631 3.631 0 00-5.157.035L2.57 16.31.75 23.25l6.942-1.819L22.157 6.97a3.628 3.628 0 00.035-5.156zM16.621 2.263l5.122 5.12M14.532 4.351l5.122 5.12"
    />,
    <path
      className="pencil-2_svg__a"
      d="M2.57 16.31l3.59 1.532 1.536 3.584M17.093 6.911L6.16 17.841"
    />
  );

export default SvgPencil2;
