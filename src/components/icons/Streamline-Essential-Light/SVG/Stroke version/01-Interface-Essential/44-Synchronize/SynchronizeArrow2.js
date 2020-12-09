import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrow2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrow-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="synchronize-arrow-2_svg__a" d="M.5 9.006l3 4.5 3.5-4" />,
    <path
      className="synchronize-arrow-2_svg__a"
      d="M3.506 13.506c-.486-6.4 3.9-10.8 9.145-10.993a9.5 9.5 0 11.7 18.985"
    />,
    <circle className="synchronize-arrow-2_svg__a" cx={13} cy={11.721} r={2} />
  );

export default SvgSynchronizeArrow2;
