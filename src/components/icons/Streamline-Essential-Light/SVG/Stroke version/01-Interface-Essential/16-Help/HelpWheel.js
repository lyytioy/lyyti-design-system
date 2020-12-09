import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHelpWheel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".help-wheel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="help-wheel_svg__a" cx={12} cy={12.001} r={11.5} />,
    <circle className="help-wheel_svg__a" cx={12} cy={12.001} r={6} />,
    <path
      className="help-wheel_svg__a"
      d="M21.423 5.406l-4.008 4.008M14.587 6.585l4.02-4.02M5.405 21.424l4.008-4.008M6.585 14.588l-4.008 4.008M18.602 21.419l-4.007-4.007M17.419 14.58l4.009 4.009M2.582 5.399l4.006 4.007M9.421 6.581L5.412 2.572"
    />
  );

export default SvgHelpWheel;
