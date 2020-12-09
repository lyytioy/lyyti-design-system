import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".social-profile-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="social-profile-bubble_svg__a"
      d="M15.033 8.625H18M15 11.625h5.25"
    />,
    <circle
      className="social-profile-bubble_svg__a"
      cx={8.854}
      cy={8.625}
      r={2.25}
    />,
    <path
      className="social-profile-bubble_svg__a"
      d="M12.75 13.875a4.5 4.5 0 00-7.793 0M15.75 3.375h-7.5a7.522 7.522 0 00-7.5 7.5 7.427 7.427 0 001.837 4.853L.75 20.625l7.359-2.264c.048 0 .093.014.141.014h7.5a7.5 7.5 0 000-15z"
    />
  );

export default SvgSocialProfileBubble;
