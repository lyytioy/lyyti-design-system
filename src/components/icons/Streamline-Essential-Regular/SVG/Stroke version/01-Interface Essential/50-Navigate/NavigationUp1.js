import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationUp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-up-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-up-1_svg__a"
      d="M23.251 10.573l-11.25-7.826-11.25 7.826"
    />,
    <path
      className="navigation-up-1_svg__a"
      d="M23.251 20.768c0 .538-.362.727-.8.42L12.8 14.479a1.517 1.517 0 00-1.607 0l-9.639 6.709c-.442.307-.8.118-.8-.42v-3.3a2.1 2.1 0 01.8-1.537L11.2 9.218a1.517 1.517 0 011.607 0l9.643 6.709a2.1 2.1 0 01.8 1.537z"
    />
  );

export default SvgNavigationUp1;
