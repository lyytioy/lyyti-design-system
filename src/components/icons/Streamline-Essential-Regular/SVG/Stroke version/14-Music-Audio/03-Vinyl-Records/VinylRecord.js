import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVinylRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vinyl-record_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="vinyl-record_svg__a" cx={12} cy={12} r={11.25} />,
    <circle className="vinyl-record_svg__a" cx={12} cy={12} r={2.25} />,
    <path
      className="vinyl-record_svg__a"
      d="M13.755 5.48a6.765 6.765 0 014.719 4.6M10.718 18.75A6.766 6.766 0 016 14.149"
    />
  );

export default SvgVinylRecord;
