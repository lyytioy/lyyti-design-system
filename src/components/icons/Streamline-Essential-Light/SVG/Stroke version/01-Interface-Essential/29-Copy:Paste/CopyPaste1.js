import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCopyPaste1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".copy-paste-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="copy-paste-1_svg__a"
      d="M9.5 22.5h-8a1 1 0 01-1-1v-17a1 1 0 011-1h4M13.5 3.5h4a1 1 0 011 1V8"
    />,
    <path
      className="copy-paste-1_svg__a"
      d="M11.5 2.5a2 2 0 00-4 0h-2v3h8v-3zM22.5 22.5a1 1 0 01-1 1h-9a1 1 0 01-1-1V11a1 1 0 011-1h7.086a1 1 0 01.707.293l1.914 1.914a1 1 0 01.293.707zM14.5 14.499h5M14.5 17.499h5"
    />
  );

export default SvgCopyPaste1;
