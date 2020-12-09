import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="notes-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="notes-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="notes-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="notes-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33M8.25 20.25h-6a1.464 1.464 0 01-1.5-1.5V3.857a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesShare;
