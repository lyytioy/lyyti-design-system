import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDisapointed = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-disapointed_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-disapointed_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-disapointed_svg__a"
      d="M6 11.2a1.8 1.8 0 003 0M15 11.2a1.8 1.8 0 003 0M9.75 18h4.5M15 6.75l3.75 1.5M9 6.75l-3.75 1.5"
    />
  );

export default SvgSmileyDisapointed;
