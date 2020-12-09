import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardBadgeStar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-badge-star-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-badge-star-1_svg__a"
      d="M16 6.76a2.782 2.782 0 01-.707 1.707L12 11.76 8.707 8.467A2.782 2.782 0 018 6.76v-5a1 1 0 011-1h6a1 1 0 011 1zM12 .76v10.98M15.094 18.26l.987-1.755a.5.5 0 00-.436-.745h-1.957l-1.252-2.225a.5.5 0 00-.871 0l-1.253 2.225H8c-.275 0-.39.2-.255.436l1.161 2.064-.987 1.755a.5.5 0 00.436.745h1.957l1.252 2.225a.5.5 0 00.871 0l1.253-2.226H16c.275 0 .39-.2.255-.436z"
    />
  );

export default SvgAwardBadgeStar1;
