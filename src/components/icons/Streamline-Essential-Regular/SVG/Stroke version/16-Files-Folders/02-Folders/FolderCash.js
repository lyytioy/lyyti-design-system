import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-cash_svg__a"
      d="M8.25 18.75H2.447M20.25 8.25v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v14.8a1.7 1.7 0 003.336.438l2.351-8.154A1.5 1.5 0 017.879 8.25H21.75a1.5 1.5 0 011.45 1.886M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H15.75M17.25 14.236V13.5M17.25 21v-.764"
    />,
    <circle className="folder-cash_svg__a" cx={17.25} cy={17.25} r={6} />
  );

export default SvgFolderCash;
