import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLinkBroken2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".link-broken-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="link-broken-2_svg__a"
      d="M5.25 12.373h-3M5.25 15.373l-1.5 1.5M5.25 9.373l-1.5-1.5M18.75 12.373h3M18.75 15.373l1.5 1.5M18.75 9.373l1.5-1.5M8.25 9.373v-4.5A3.762 3.762 0 0112 1.123a3.761 3.761 0 013.75 3.75v5.25a3.763 3.763 0 01-2.25 3.435 3.709 3.709 0 01-1.5.315"
    />,
    <path
      className="link-broken-2_svg__a"
      d="M15.75 14.623v4.5a3.76 3.76 0 01-3.75 3.75 3.761 3.761 0 01-3.75-3.75v-4.5a3.762 3.762 0 013.75-3.75"
    />
  );

export default SvgLinkBroken2;
