import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDisapointedMad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-disapointed-mad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-disapointed-mad_svg__a"
      d="M7.5 10.875a.375.375 0 11.375-.375.375.375 0 01-.375.375M16.5 10.875a.375.375 0 11.375-.375.375.375 0 01-.375.375M6 7.553a1.8 1.8 0 013 0M15 7.553a1.8 1.8 0 013 0"
    />,
    <circle
      className="smiley-disapointed-mad_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="smiley-disapointed-mad_svg__a"
      d="M18.048 18a6.752 6.752 0 00-12.1 0"
    />
  );

export default SvgSmileyDisapointedMad;
