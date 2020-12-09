import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEjectButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".eject-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="eject-button_svg__a" cx={12} cy={11.999} r={11.5} />,
    <rect
      className="eject-button_svg__a"
      x={7.5}
      y={14.499}
      width={9}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="eject-button_svg__a"
      d="M15.377 12.5a.5.5 0 00.372-.835l-3.377-3.753a.5.5 0 00-.744 0l-3.377 3.752a.5.5 0 00.372.835z"
    />
  );

export default SvgEjectButton;
