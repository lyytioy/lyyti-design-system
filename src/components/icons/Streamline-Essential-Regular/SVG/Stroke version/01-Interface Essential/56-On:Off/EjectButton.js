import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEjectButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".eject-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="eject-button_svg__a"
      d="M8.34 11.758a.465.465 0 00.038.6.971.971 0 00.728.29h5.788a.971.971 0 00.728-.29.465.465 0 00.038-.6L12.765 7.73a1.037 1.037 0 00-1.53 0z"
    />,
    <circle className="eject-button_svg__a" cx={12} cy={11.998} r={11.25} />,
    <path className="eject-button_svg__a" d="M15.813 15.643h-7.5" />
  );

export default SvgEjectButton;
