import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDelete2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".delete-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="delete-2_svg__a" cx={12} cy={12} r={11.5} />,
    <path className="delete-2_svg__a" d="M7 7l10 10M17 7L7 17" />
  );

export default SvgDelete2;
