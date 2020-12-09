import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRight1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-right-1_svg__a"
      d="M1 4.5a.5.5 0 00-.5.5v8.293a.5.5 0 00.146.354l5.707 5.707a.5.5 0 00.354.146H14.5V22a.5.5 0 00.894.308l8-10a.5.5 0 000-.616l-8-10A.5.5 0 0014.5 2v2a.5.5 0 01-.5.5z"
    />,
    <path
      className="navigation-right-1_svg__a"
      d="M6.5 19.452V14a.5.5 0 00-.5-.5H.547"
    />
  );

export default SvgNavigationRight1;
