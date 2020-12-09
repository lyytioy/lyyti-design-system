import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-badge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-badge_svg__a"
      d="M19.059 23.105l-6.177-4.492a1.5 1.5 0 00-1.764 0l-6.177 4.492A.75.75 0 013.75 22.5V2.25a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V22.5a.75.75 0 01-1.191.605z"
    />,
    <path
      className="award-badge_svg__a"
      d="M20.25 18.4l-7.368-5.358a1.5 1.5 0 00-1.764 0L3.75 18.4"
    />,
    <path
      className="award-badge_svg__a"
      d="M20.25 12.75l-7.368-5.358a1.5 1.5 0 00-1.764 0L3.75 12.75"
    />
  );

export default SvgAwardBadge;
