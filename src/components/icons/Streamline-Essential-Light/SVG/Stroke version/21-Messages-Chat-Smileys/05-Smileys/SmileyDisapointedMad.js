import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDisapointedMad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-disapointed-mad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-disapointed-mad_svg__a"
      d="M7.5 19a4.5 4.5 0 019 0"
    />,
    <circle
      className="smiley-disapointed-mad_svg__a"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="smiley-disapointed-mad_svg__a"
      d="M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.5 7.5a2.5 2.5 0 00-4 0M15.5 7.5a2.5 2.5 0 014 0"
    />
  );

export default SvgSmileyDisapointedMad;
