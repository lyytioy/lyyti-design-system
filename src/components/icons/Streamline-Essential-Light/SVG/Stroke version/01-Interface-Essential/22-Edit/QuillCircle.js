import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuillCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".quill-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="quill-circle_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="quill-circle_svg__a"
      d="M11 12.5h5M9 14.5h5.3c-2.8 2.542-6.184 2.912-7.206 1.9-1.179-1.179.044-4.8 2.973-7.725A15.192 15.192 0 0114.5 5.5V9"
    />,
    <path
      className="quill-circle_svg__a"
      d="M13 10.5h4.25c1.145-2 1.284-3.714.378-4.629L5.5 18"
    />
  );

export default SvgQuillCircle;
