import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCopyPaste = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".copy-paste_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="copy-paste_svg__a"
      d="M9.5 21.5h-8a1 1 0 01-1-1v-16a1 1 0 011-1h2M13.5 3.5h2a1 1 0 011 1V8"
    />,
    <circle className="copy-paste_svg__a" cx={8.5} cy={1.999} r={1.5} />,
    <path
      className="copy-paste_svg__a"
      d="M9.915 2.5H12.5a1 1 0 011 1v1a1 1 0 01-1 1h-8a1 1 0 01-1-1v-1a1 1 0 011-1h2.585M22.5 22.5a1 1 0 01-1 1h-9a1 1 0 01-1-1V11a1 1 0 011-1h7.086a1 1 0 01.707.293l1.914 1.914a1 1 0 01.293.707zM14.5 14.499h5M14.5 17.499h5"
    />
  );

export default SvgCopyPaste;
