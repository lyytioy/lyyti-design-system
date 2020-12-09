import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentTypingMachine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-typing-machine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-typing-machine_svg__a"
      d="M2.5 23.493h19M20.232 15.5H22.5v-4h-21v4h2.268M1.5 10.5v6M22.5 10.5v6M.5 13.5h1M22.5 13.5h1M18.5 9.507V2.914a1 1 0 00-.293-.707L16.793.793A1 1 0 0016.086.5H6.5a1 1 0 00-1 1v8.007M6 21a.25.25 0 11-.25.25A.25.25 0 016 21M9 21a.25.25 0 11-.25.25A.25.25 0 019 21M12 21a.25.25 0 11-.25.25A.25.25 0 0112 21M15 21a.25.25 0 11-.25.25A.25.25 0 0115 21M18 21a.25.25 0 11-.25.25A.25.25 0 0118 21M7.5 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.5 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.5 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.5 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="content-typing-machine_svg__a"
      d="M18.5 14.5h-4a2.293 2.293 0 01-2.5 2 2.293 2.293 0 01-2.5-2h-4a2 2 0 00-2 2v7h17v-7a2 2 0 00-2-2z"
    />
  );

export default SvgContentTypingMachine;
