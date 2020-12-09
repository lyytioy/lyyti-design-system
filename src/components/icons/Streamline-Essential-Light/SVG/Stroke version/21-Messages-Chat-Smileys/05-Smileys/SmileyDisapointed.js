import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDisapointed = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-disapointed_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="smiley-disapointed_svg__a" d="M9.5 18.5h5" />,
    <circle className="smiley-disapointed_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-disapointed_svg__a"
      d="M14.5 12.392a2.359 2.359 0 004 0M9.5 12.392a2.359 2.359 0 01-4 0M4.5 9.5l4-2M19.5 9.5l-4-2"
    />
  );

export default SvgSmileyDisapointed;
