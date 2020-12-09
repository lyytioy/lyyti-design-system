import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card_svg__a"
      d="M15.793.793A1 1 0 0015.086.5H4.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h15a1 1 0 001-1V5.914a1 1 0 00-.293-.707zM7.5 3.5v5M10.5 3.5v5M13.5 3.5v5M16.5 5.5v4"
    />,
    <path className="sd-card_svg__a" d="M14 20.5h-4l2-3 2 3z" />
  );

export default SvgSdCard;
