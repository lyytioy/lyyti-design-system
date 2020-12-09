import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDelete = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".delete_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="delete_svg__a" cx={12} cy={12} r={11.5} />,
    <path className="delete_svg__a" d="M3.869 20.131L20.131 3.869" />
  );

export default SvgDelete;
