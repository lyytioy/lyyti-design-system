import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaperWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paper-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paper-write_svg__a"
      d="M18.5 19v3.5a1 1 0 01-1 1h-16a1 1 0 01-1-1v-18a1 1 0 011-1h3M14.5 3.5h3a1 1 0 011 1V8"
    />,
    <circle className="paper-write_svg__a" cx={9.5} cy={1.999} r={1.5} />,
    <path
      className="paper-write_svg__a"
      d="M10.915 2.5H13.5a1 1 0 011 1v1a1 1 0 01-1 1h-8a1 1 0 01-1-1v-1a1 1 0 011-1h2.585M3.5 9.499h12M3.5 13.499h9.466M3.5 17.499h7.983M17 17.5l-3.5 1 1-3.5 5.982-5.982a1.768 1.768 0 012.5 2.5z"
    />
  );

export default SvgPaperWrite;
