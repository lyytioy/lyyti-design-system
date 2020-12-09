import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencilWrite2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-write-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pencil-write-2_svg__a"
      d="M13.068 14.184l-3.795.543.543-3.795 9.758-9.758a2.3 2.3 0 113.252 3.252z"
    />,
    <path
      className="pencil-write-2_svg__a"
      d="M12 5.5H2.5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V12"
    />
  );

export default SvgPencilWrite2;
