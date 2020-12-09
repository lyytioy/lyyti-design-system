import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchSticker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-sticker_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="retouch-sticker_svg__a"
      d="M7.125 9a.375.375 0 11-.375.375A.375.375 0 017.125 9M5.513 15.424A7.334 7.334 0 0012 19.337c.168 0 .334-.006.5-.017q.207-.014.411-.039"
    />,
    <path
      className="retouch-sticker_svg__a"
      d="M23.239 11.523A11.25 11.25 0 1012 23.25c.168 0 .334 0 .5-.012M14.446 9.66a2.308 2.308 0 013.913 0M23.239 11.523L12.5 23.238"
    />,
    <path
      className="retouch-sticker_svg__a"
      d="M12.489 23.25v-.978A10.761 10.761 0 0123.25 11.511"
    />
  );

export default SvgRetouchSticker;
