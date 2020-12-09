import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cd_svg__a" cx={12} cy={12} r={11.25} />,
    <circle className="cd_svg__a" cx={12} cy={12} r={3.75} />,
    <path
      className="cd_svg__a"
      d="M12 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgCd;
