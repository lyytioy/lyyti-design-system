import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentQuillInk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-quill-ink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-quill-ink_svg__a"
      d="M8.419 18.5v-2h1v-2h-5v2h1v2c-2.619.342-4.247 1.488-4.808 3.76a1 1 0 00.971 1.24h10.743a1 1 0 00.969-1.248c-.579-2.266-2.264-3.41-4.875-3.752zM16.116 7.5h4.803M14.116 9.5h5.3c-2.8 2.543-6.1 2.819-7.121 1.809-1.2-1.167.026-4.778 2.966-7.716A17.246 17.246 0 0119.419.5v3.7"
    />,
    <path
      className="content-quill-ink_svg__a"
      d="M18.106 5.5h4.3c1.151-2.008 1.358-3.821.433-4.73L10.693 12.915"
    />
  );

export default SvgContentQuillInk;
