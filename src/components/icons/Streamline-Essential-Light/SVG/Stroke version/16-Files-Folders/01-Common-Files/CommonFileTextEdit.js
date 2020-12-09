import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-edit_svg__a"
      d="M4.5 8.5H14M4.5 11.5H14M4.5 5.5h7M4.5 14.5H12M4.5 17.5h4M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5M15.7 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3zM18.979 13.021l3 3M12.7 19.3l3 3"
    />
  );

export default SvgCommonFileTextEdit;
