import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cd_svg__a" cx={12} cy={12} r={4.5} />,
    <circle className="cd_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="cd_svg__a" cx={12} cy={12} r={1.5} />
  );

export default SvgCd;
