import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntenna = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="antenna_svg__a"
      d="M19.765 1.888a2 2 0 010 2.827L17.29 7.192a.5.5 0 01-.707 0l-2.121-2.121a.5.5 0 010-.707l2.475-2.476a2 2 0 012.828 0zM7.39 16.383a.5.5 0 010 .707l-2.475 2.476a2 2 0 01-2.828-2.829l2.475-2.474a.5.5 0 01.707 0zM8.451 8.252a4.5 4.5 0 000 6.365l6.364-6.365a4.5 4.5 0 00-6.364 0z"
    />,
    <path
      className="antenna_svg__a"
      d="M13.063 10a2.1 2.1 0 01.046 2.907 2.069 2.069 0 01-2.882-.071M16.64 10.76a5 5 0 01-5.657 5.686M19.645 10.61a8 8 0 01-8.845 8.837M22.527 9.578A11.006 11.006 0 019.872 22.345"
    />
  );

export default SvgAntenna;
