import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCopyrightDollar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-copyright-dollar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-copyright-dollar_svg__a"
      cx={8.25}
      cy={15.75}
      r={7.5}
    />,
    <path
      className="file-copyright-dollar_svg__a"
      d="M3.75 6.75v-4.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06V21.75a1.5 1.5 0 01-1.5 1.5h-4.5"
    />,
    <path
      className="file-copyright-dollar_svg__a"
      d="M23.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M9.75 12.75H7.717a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H6.75M8.25 12.75V12M8.25 19.5v-.75M12.156 19.281l1.581 1.581M3.138 10.263l1.409 1.409"
    />
  );

export default SvgFileCopyrightDollar;
