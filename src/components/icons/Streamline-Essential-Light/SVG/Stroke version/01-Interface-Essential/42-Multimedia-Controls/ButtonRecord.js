import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-record_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="button-record_svg__a"
      cx={12.079}
      cy={11.999}
      r={11.5}
    />,
    <circle className="button-record_svg__a" cx={12.079} cy={11.999} r={5.5} />
  );

export default SvgButtonRecord;
