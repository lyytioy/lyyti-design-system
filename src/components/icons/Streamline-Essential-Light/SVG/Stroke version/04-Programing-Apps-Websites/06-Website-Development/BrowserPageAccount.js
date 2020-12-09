import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageAccount = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-account_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-account_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path className="browser-page-account_svg__a" d="M.5 5.5h23" />,
    <rect
      className="browser-page-account_svg__a"
      x={13.5}
      y={8.5}
      width={7}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="browser-page-account_svg__a"
      x={13.5}
      y={15.5}
      width={7}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="browser-page-account_svg__a"
      x={3.5}
      y={8.5}
      width={7}
      height={8}
      rx={0.5}
      ry={0.5}
    />,
    <circle className="browser-page-account_svg__a" cx={7} cy={12} r={1.5} />,
    <path
      className="browser-page-account_svg__a"
      d="M4.5 16.5a2.784 2.784 0 012.5-3 2.784 2.784 0 012.5 3M4 18.5h4M4 20.5h4M4 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgBrowserPageAccount;
