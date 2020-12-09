import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmirkGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-smirk-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-smirk-glasses_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-smirk-glasses_svg__a"
      d="M10 19.5h4a3 3 0 003-3M19 17a1.415 1.415 0 000-2M22.586 7.5l-.922 2.907A3 3 0 0118.8 12.5h-4.234a1 1 0 01-.857-.486l-.952-1.585a.882.882 0 00-1.514 0l-.952 1.585a1 1 0 01-.857.486H5.2a3 3 0 01-2.86-2.093L1.414 7.5z"
    />
  );

export default SvgSmileySmirkGlasses;
