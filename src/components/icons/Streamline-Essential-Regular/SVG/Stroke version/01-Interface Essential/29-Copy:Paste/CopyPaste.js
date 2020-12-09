import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCopyPaste = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".copy-paste_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="copy-paste_svg__a"
      d="M20.25 8.249v-3a1.5 1.5 0 00-1.5-1.5h-4M6.25 3.749h-4a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6"
    />,
    <path
      className="copy-paste_svg__a"
      d="M14.421 4.736a.751.751 0 01-.712.513H7.291a.751.751 0 01-.712-.513l-1-3a.749.749 0 01.712-.987h8.418a.749.749 0 01.712.987z"
    />,
    <rect
      className="copy-paste_svg__a"
      x={11.25}
      y={11.249}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="copy-paste_svg__a"
      d="M14.25 14.249h6M14.25 17.249h6M14.25 20.249h2.25"
    />
  );

export default SvgCopyPaste;
