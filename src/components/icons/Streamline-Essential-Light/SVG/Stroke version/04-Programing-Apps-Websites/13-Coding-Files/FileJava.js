import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileJava = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-java_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-java_svg__a"
      d="M19.5 9.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1h17a1 1 0 001-1v-1"
    />,
    <path
      className="file-java_svg__a"
      d="M14.5.584V4.5a1 1 0 001 1h3.92M8.5 12.5V17a1.5 1.5 0 01-3 0M10.5 18.5V14a1.5 1.5 0 113 0v4.5M10.5 15.504h3M20.5 18.5V14a1.5 1.5 0 113 0v4.5M20.5 15.504h3M18.5 12.5V14a7.5 7.5 0 01-1.5 4.5 7.5 7.5 0 01-1.5-4.5v-1.5"
    />
  );

export default SvgFileJava;
