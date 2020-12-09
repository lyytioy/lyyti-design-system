import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIndentIncrease = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".indent-increase_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="indent-increase_svg__a"
      d="M.5 22.498h18M.5 2.498h18M.5 6.498H14M.5 10.498H14M.5 14.498H14M.5 18.498H14M16.5 17.162a.5.5 0 00.832.374l5.248-4.664a.5.5 0 000-.748L17.332 7.46a.5.5 0 00-.832.374z"
    />
  );

export default SvgIndentIncrease;
