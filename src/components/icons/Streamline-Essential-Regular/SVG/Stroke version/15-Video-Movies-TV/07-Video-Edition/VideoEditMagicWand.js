import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditMagicWand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-magic-wand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-magic-wand_svg__a"
      d="M17.729 23.25l4.671-8.763a.827.827 0 00-.34-1.12l-1.46-.779a.829.829 0 00-1.12.341l-5.5 10.321M20.845 17.408l-2.921-1.558M14.25 12v3M15.75 13.5h-3M21.75 6v3M23.25 7.5h-3M.75 5.25h4.5M18.75 5.25h-4.5M9.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v3M5.25 23.25v-9M14.25 9.75v-9M5.25 9.75v-9M.75 18.75h4.5M.75 14.25h9M.75 9.75h18"
    />
  );

export default SvgVideoEditMagicWand;
