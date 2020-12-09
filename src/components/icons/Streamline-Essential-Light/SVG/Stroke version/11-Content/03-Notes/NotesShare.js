import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-share_svg__a"
      d="M8.5 20.5h-7a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v8M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4"
    />,
    <circle className="notes-share_svg__a" cx={13.75} cy={18.25} r={2.25} />,
    <circle className="notes-share_svg__a" cx={21.25} cy={21.25} r={2.25} />,
    <circle className="notes-share_svg__a" cx={21.25} cy={13.75} r={2.25} />,
    <path
      className="notes-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33"
    />
  );

export default SvgNotesShare;
