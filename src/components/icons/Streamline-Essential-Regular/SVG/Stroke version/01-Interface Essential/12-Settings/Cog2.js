import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCog2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cog-2_svg__a" cx={12} cy={12.001} r={7.5} />,
    <path
      className="cog-2_svg__a"
      d="M1.5 12.001h3M19.5 12.001h3M12 1.501v3M12 19.501v3M4.575 4.576l2.123 2.122M17.303 17.303l2.122 2.123M19.425 4.576l-2.122 2.122M6.698 17.303l-2.123 2.123"
    />,
    <circle className="cog-2_svg__a" cx={12} cy={12.001} r={2.25} />
  );

export default SvgCog2;
