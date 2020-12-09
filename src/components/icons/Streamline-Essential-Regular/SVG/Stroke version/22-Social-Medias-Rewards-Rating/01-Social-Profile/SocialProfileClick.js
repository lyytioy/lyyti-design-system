import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileClick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".social-profile-click_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="social-profile-click_svg__a"
      d="M23.136 23.25l.1-1.122a3 3 0 00-2.337-3.2l-3.651-.812v-5.741a1.875 1.875 0 00-3.75 0v9.2l-1.477-1.108a1.533 1.533 0 00-2.146 2.146l.474.632"
    />,
    <path
      className="social-profile-click_svg__a"
      d="M21.75 15.75V2.25a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h4.5M.75 5.25h21"
    />,
    <rect
      className="social-profile-click_svg__a"
      x={3.75}
      y={8.25}
      width={6}
      height={6}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="social-profile-click_svg__a"
      d="M3.75 17.25h6.001M12.75 8.25h6.001"
    />
  );

export default SvgSocialProfileClick;
