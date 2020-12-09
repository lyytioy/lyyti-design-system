import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlignPortrait = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".align-portrait_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="align-portrait_svg__a"
      d="M10 21.5h12.5a1 1 0 001-1v-17a1 1 0 00-1-1H10M4.5 20.498v-17M1 6.998l3.5-3.5 3.5 3.5"
    />,
    <circle className="align-portrait_svg__a" cx={16.001} cy={10.498} r={2} />,
    <path
      className="align-portrait_svg__a"
      d="M19.5 16.5h-7c0-2.432 1.567-4 3.5-4s3.5 1.566 3.5 4z"
    />
  );

export default SvgAlignPortrait;
