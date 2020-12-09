import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgJava = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".java_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="java_svg__a"
      d="M.738 3.754h22.5M.738 20.254h22.5M3.738 8.254v6a1.5 1.5 0 01-1.5 1.5h-1.5M6.738 15.754v-6a1.5 1.5 0 013 0v6M6.738 12.754h3M18.738 15.754v-6a1.5 1.5 0 113 0v6M18.738 12.754h3M12.738 8.254V10.8a8.924 8.924 0 001.5 4.954 8.932 8.932 0 001.5-4.954V8.254"
    />
  );

export default SvgJava;
