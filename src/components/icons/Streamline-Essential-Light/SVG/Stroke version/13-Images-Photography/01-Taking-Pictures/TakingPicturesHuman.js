import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".taking-pictures-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="taking-pictures-human_svg__a"
      d="M7.018 17.75a8.952 8.952 0 00-1.518 5h18a9 9 0 00-9-9"
    />,
    <path
      className="taking-pictures-human_svg__a"
      d="M12.5 14.75a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1h4c.28-.56.451-1 1.118-1h2.264c.667 0 .838.44 1.118 1h1.5a1 1 0 011 1z"
    />,
    <circle
      className="taking-pictures-human_svg__a"
      cx={7.5}
      cy={11.25}
      r={2}
    />,
    <path
      className="taking-pictures-human_svg__a"
      d="M2 5.75h.5M14.5 12.25a5.5 5.5 0 10-5.119-7.5"
    />
  );

export default SvgTakingPicturesHuman;
