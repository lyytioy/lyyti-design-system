import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentQuillPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-quill-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-quill-pen_svg__a"
      d="M23.254 23.251l-6.375-6.375M3.64 11.267A18.262 18.262 0 01.759.825c.121 0 6.678-.808 11.178 2.9M19.913 15.758c.238 1.541.039 2.793-.66 3.492-1.06 1.06-3.247 1.056-5.757.137M4.867 14.9a1.5 1.5 0 000 2.121l2.121 2.122a1.5 1.5 0 002.121 0L22.368 5.879a3 3 0 00-4.243-4.242zM22.368 5.879a3 3 0 010 4.243L19.186 13.3"
    />,
    <path
      className="content-quill-pen_svg__a"
      d="M5.914 18.064a2.314 2.314 0 00-3.247.065c-.9.9-1.921 5.122-1.921 5.122s4.2-1.035 5.1-1.94a2.313 2.313 0 00.068-3.247zM17.048 11.199l-4.243-4.242"
    />
  );

export default SvgContentQuillPen;
