import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".social-profile-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="social-profile-bubble_svg__a"
      d="M11.581 14.5c-.443-.174-.942-.355-1.477-.553-.453-.168-.379-1.35-.178-1.571a3.339 3.339 0 00.87-2.591 2.073 2.073 0 00-2.12-2.266 2.073 2.073 0 00-2.121 2.266 3.339 3.339 0 00.87 2.591c.2.221.275 1.4-.178 1.571-.518.192-1 .367-1.434.536M14.5 9h4M13.5 11h6M13.5 13h6"
    />,
    <path
      className="social-profile-bubble_svg__a"
      d="M16.5 4h-9a6.986 6.986 0 00-5.323 11.527L.5 20l7.333-2H16.5a7 7 0 000-14z"
    />
  );

export default SvgSocialProfileBubble;
