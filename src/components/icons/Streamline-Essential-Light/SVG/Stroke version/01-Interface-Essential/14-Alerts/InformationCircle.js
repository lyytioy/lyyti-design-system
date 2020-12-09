import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInformationCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".information-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="information-circle_svg__a" cx={12} cy={12.001} r={11} />,
    <path
      className="information-circle_svg__a"
      d="M14.5 17.005H13a1 1 0 01-1-1v-6.5a.5.5 0 00-.5-.5H10M11.745 6.5a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgInformationCircle;
