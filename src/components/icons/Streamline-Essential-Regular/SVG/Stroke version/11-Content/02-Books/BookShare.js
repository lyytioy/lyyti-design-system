import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-share_svg__a"
      d="M12.75 23.25h-9A2.25 2.25 0 011.5 21M19.5 8.25V1.5a.75.75 0 00-.75-.75H4.5a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25H7.5"
    />,
    <circle className="book-share_svg__a" cx={12.75} cy={18} r={2.25} />,
    <circle className="book-share_svg__a" cx={20.25} cy={21} r={2.25} />,
    <circle className="book-share_svg__a" cx={20.25} cy={13.5} r={2.25} />,
    <path
      className="book-share_svg__a"
      d="M14.674 16.845l3.65-2.19M14.838 18.835l3.324 1.33"
    />
  );

export default SvgBookShare;
