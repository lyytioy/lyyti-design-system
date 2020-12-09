import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileQuill = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-quill_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-quill_svg__a"
      d="M11 23.25l5.834-5.834M23.178 11.052a10.471 10.471 0 00-2.24 0l-2 3.18-1.229-2.289c-4.459 2.189-6.2 7.478-4.551 9.13 2.212 2.216 10.97-1.665 10.02-10.021zM8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgCommonFileQuill;
