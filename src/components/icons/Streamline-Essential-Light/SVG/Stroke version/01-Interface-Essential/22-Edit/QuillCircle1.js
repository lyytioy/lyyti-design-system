import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuillCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".quill-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="quill-circle-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="quill-circle-1_svg__a"
      d="M11.5 12.5l-6 6M18.228 5.772a21.1 21.1 0 00-2.658.651l-.878 2.885-1.843-1.844a13.323 13.323 0 00-3.813 2.551c-3.32 3.319-1.768 5.3-1.061 6.01s2.691 2.259 6.01-1.061 4.243-9.192 4.243-9.192z"
    />
  );

export default SvgQuillCircle1;
