import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingLanguageHtml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-language-html_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="programming-language-html_svg__a"
      x={0.5}
      y={2.5}
      width={23}
      height={19}
      rx={2}
      ry={2}
    />,
    <path
      className="programming-language-html_svg__a"
      d="M.5 7.5h23M4 4.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.5 16.5v-5M8.5 11.5h2M4.5 16.5v-5M6.5 16.5v-5M4.5 14.5h2M17.5 11.5v4a1 1 0 001 1h1M15.5 16.5v-5L14 14l-1.5-2.5v5"
    />
  );

export default SvgProgrammingLanguageHtml;
