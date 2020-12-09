import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchSticker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-sticker_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="retouch-sticker_svg__a"
      d="M7.75 9a.25.25 0 11-.25.25.25.25 0 01.25-.25M5.369 15.5a7.507 7.507 0 007.561 3.943"
    />,
    <path
      className="retouch-sticker_svg__a"
      d="M23.489 11.512A11.5 11.5 0 1012 23.5c.171 0 .342 0 .511-.012M14.5 9.608a2.359 2.359 0 014 0M23.489 11.512L12.511 23.488"
    />,
    <path
      className="retouch-sticker_svg__a"
      d="M12.5 23.5v-1a11 11 0 0111-11"
    />
  );

export default SvgRetouchSticker;
