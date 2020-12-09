import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPencilQuill = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pencil-quill_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-pencil-quill_svg__a"
      d="M23.246 23.214l-5.996-5.997M3.693 11.221A18.253 18.253 0 01.812.78c.12 0 6.684-.059 11.178 2.9M19.336 13.525c.887 2.517.918 4.679-.091 5.688-1.059 1.059-3.246 1.056-5.756.137M22.164 1.8a3 3 0 00-4.242 0L2.956 16.762l-2.21 6.459L7.2 21 22.164 6.038a3 3 0 000-4.238zM17.041 2.677l4.242 4.242M2.956 16.762L7.203 21"
    />
  );

export default SvgContentPencilQuill;
