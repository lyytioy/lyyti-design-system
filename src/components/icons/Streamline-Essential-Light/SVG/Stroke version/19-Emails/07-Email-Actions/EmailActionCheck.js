import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="email-action-check_svg__a"
      cx={17.431}
      cy={17.552}
      r={6}
    />,
    <path
      className="email-action-check_svg__a"
      d="M20.105 15.808L17.2 19.681a.75.75 0 01-1.131.081l-1.5-1.5M9.526 14.533h-7.5a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v7.5"
    />,
    <path
      className="email-action-check_svg__a"
      d="M21.093.979L11.026 9.033.958.979"
    />
  );

export default SvgEmailActionCheck;
