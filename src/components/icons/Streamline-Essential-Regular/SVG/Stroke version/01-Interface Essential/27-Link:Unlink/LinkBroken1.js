import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLinkBroken1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".link-broken-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="link-broken-1_svg__a"
      d="M16.5 15.749h1.875A3.963 3.963 0 0022.5 12a3.962 3.962 0 00-4.125-3.75H16.5M7.5 15.749H5.625A3.963 3.963 0 011.5 12a3.963 3.963 0 014.125-3.75H7.5M12 5.249v-4.5M9 5.249l-1.5-1.5M15 5.249l1.5-1.5M12 18.749v4.5M9 18.749l-1.5 1.5M15 18.749l1.5 1.5"
    />
  );

export default SvgLinkBroken1;
