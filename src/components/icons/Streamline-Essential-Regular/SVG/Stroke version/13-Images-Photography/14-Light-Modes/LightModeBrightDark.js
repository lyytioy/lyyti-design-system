import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeBrightDark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-bright-dark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-bright-dark_svg__a"
      d="M20.25 15.372l2.357-2.357a1.5 1.5 0 000-2.121L20.25 8.537V5.2a1.5 1.5 0 00-1.5-1.5h-3.333l-2.356-2.353a1.5 1.5 0 00-2.122 0L8.583 3.7H5.25a1.5 1.5 0 00-1.5 1.5v3.337l-2.357 2.357a1.5 1.5 0 000 2.121l2.357 2.357V18.7a1.5 1.5 0 001.5 1.5h3.333l2.356 2.357a1.5 1.5 0 002.122 0l2.356-2.357h3.333a1.5 1.5 0 001.5-1.5z"
    />,
    <path
      className="light-mode-bright-dark_svg__a"
      d="M12 6.7a5.25 5.25 0 010 10.5z"
    />
  );

export default SvgLightModeBrightDark;
