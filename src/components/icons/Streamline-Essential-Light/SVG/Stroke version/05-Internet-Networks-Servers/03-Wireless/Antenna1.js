import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntenna1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="antenna-1_svg__a"
      d="M2.975 2.975a2 2 0 000 2.828l4.7 4.7L10.5 7.672l-4.7-4.7a2 2 0 00-2.825.003zM13.581.854a2.5 2.5 0 010 3.535L12.167 5.8a.5.5 0 01-.707 0l-1.414-1.411a.5.5 0 010-.707L12.874.854a.5.5 0 01.707 0zM5.8 11.46a.5.5 0 010 .707l-1.411 1.414a2.5 2.5 0 01-3.535 0 .5.5 0 010-.707l2.828-2.828a.5.5 0 01.707 0zM10.4 13.935a2.5 2.5 0 013.535-3.535zM9.339 6.51l1.414-1.414M6.51 9.339l-1.414 1.414M12.167 12.167l1.061 1.061M4.743 4.743L6.51 6.51M17.442 11.76a5 5 0 01-5.658 5.686M20.447 11.61a8 8 0 01-8.847 8.837M23.328 10.578a11.005 11.005 0 01-12.655 12.767"
    />
  );

export default SvgAntenna1;
