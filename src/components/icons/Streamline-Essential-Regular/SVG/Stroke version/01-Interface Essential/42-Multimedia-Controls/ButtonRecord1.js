import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRecord1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-record-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="button-record-1_svg__a" cx={12} cy={11.998} r={11.25} />,
    <circle className="button-record-1_svg__a" cx={12} cy={11.998} r={4.5} />
  );

export default SvgButtonRecord1;
