import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetwork1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-1_svg__a"
      d="M1.052 23.5H23M12.031 23.5v-5M21.031 9.467a9.03 9.03 0 01-9.025 9.033 9.127 9.127 0 01-8.975-9.2A8.8 8.8 0 0111.644.509C11.773.5 11.9.5 12.035.5a8.948 8.948 0 018.996 8.967zM11.644.509c-4.695 5.086-4.695 11.723 0 17.984M12.427.509c4.7 5.086 4.7 11.721 0 17.981M4.033 13.5h16.05M4.531 4.5h15M3.031 9.5h18"
    />
  );

export default SvgNetwork1;
