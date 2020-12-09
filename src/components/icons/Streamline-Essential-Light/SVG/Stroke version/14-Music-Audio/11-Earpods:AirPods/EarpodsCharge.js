import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsCharge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-charge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="earpods-charge_svg__a"
      d="M4.5.5A5.213 5.213 0 00.791 2a1 1 0 00-.291.709v4.582A1 1 0 00.791 8 5.213 5.213 0 004.5 9.5a5.325 5.325 0 003-.92v3.92h2V5a4.77 4.77 0 00-5-4.5zM2.5 12.5h19v7a4 4 0 01-4 4h-11a4 4 0 01-4-4v-7z"
    />,
    <path
      className="earpods-charge_svg__a"
      d="M3 4.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5.5A5.213 5.213 0 0123.209 2a1 1 0 01.291.705v4.586a1 1 0 01-.291.709A5.213 5.213 0 0119.5 9.5a5.325 5.325 0 01-3-.92v3.92h-2V5a4.77 4.77 0 015-4.5z"
    />,
    <path
      className="earpods-charge_svg__a"
      d="M21 4.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M12.5 13.5l-3.94 4.588a.248.248 0 00-.037.267.251.251 0 00.227.145h1.75v4l3.941-4.588a.25.25 0 00-.191-.412H12.5z"
    />
  );

export default SvgEarpodsCharge;
