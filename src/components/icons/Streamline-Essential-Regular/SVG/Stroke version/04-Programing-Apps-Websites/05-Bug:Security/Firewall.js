import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFirewall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".firewall_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="firewall_svg__a"
      d="M.75 14.25h22.5v9H.75zM.75 18.75h22.5M15.75 14.25v4.5M8.25 14.25v4.5M5.25 18.75v4.5M12.75 18.75v4.5M20.25 18.75v4.5M11.4 14.25c-2.7 0-5.4-2.015-5.4-4.5 0-2.7 1.35-4.5 3.6-4.5-.3 1.5-.45 2.7 1.35 2.7 2.7 0 1.967-3.925-.9-7.2 3.728 0 7.65 3.75 7.65 6.75 0 3.728-.9 6.75-6.3 6.75z"
    />
  );

export default SvgFirewall;
