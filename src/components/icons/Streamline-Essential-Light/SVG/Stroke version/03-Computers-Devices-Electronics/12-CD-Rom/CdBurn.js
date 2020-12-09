import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdBurn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-burn_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cd-burn_svg__a" cx={12.443} cy={16.5} r={7} />,
    <circle className="cd-burn_svg__a" cx={12.443} cy={16.5} r={2} />,
    <path
      className="cd-burn_svg__a"
      d="M18.993 14.026A5 5 0 0021.5 9.6a7.052 7.052 0 00-2.1-4.9 2.422 2.422 0 01-2.8 2.1A5.311 5.311 0 0115.2.5c-4.375 0-7.175 2.581-7.7 6.3a2.575 2.575 0 01-2.8-2.1c-3.1 2.633-3.255 7.962.993 9.936"
    />
  );

export default SvgCdBurn;
