import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowEye = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-eye_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-eye_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-eye_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 18.5c-3.866 0-7-4-7-4s3.134-4 7-4 7 4 7 4-3.134 4-7 4z"
    />,
    <circle className="app-window-eye_svg__a" cx={12} cy={14.504} r={2.5} />
  );

export default SvgAppWindowEye;
