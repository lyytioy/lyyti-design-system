import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-up_svg__a"
      d="M19.5 23a.5.5 0 01-.5.5h-8.293a.5.5 0 01-.354-.146l-5.707-5.709a.5.5 0 01-.146-.354V9.5H2a.5.5 0 01-.308-.9l10-8a.5.5 0 01.616 0l10 8a.5.5 0 01-.308.9h-2a.5.5 0 00-.5.5z"
    />,
    <path
      className="navigation-up_svg__a"
      d="M4.545 17.5H10a.5.5 0 01.5.5v5.45"
    />
  );

export default SvgNavigationUp;
