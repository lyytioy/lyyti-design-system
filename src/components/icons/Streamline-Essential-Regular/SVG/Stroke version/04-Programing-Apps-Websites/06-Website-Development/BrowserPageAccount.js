import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageAccount = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-account_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-account_svg__a"
      x={1.499}
      y={2.25}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="browser-page-account_svg__a" d="M1.499 6.75h21" />,
    <rect
      className="browser-page-account_svg__a"
      x={4.499}
      y={9.75}
      width={6}
      height={6}
      rx={0.75}
      ry={0.75}
    />,
    <path className="browser-page-account_svg__a" d="M4.499 18.75H10.5" />,
    <rect
      className="browser-page-account_svg__a"
      x={13.499}
      y={9.75}
      width={6}
      height={9}
      rx={0.75}
      ry={0.75}
    />,
    <path className="browser-page-account_svg__a" d="M13.499 14.25h6" />
  );

export default SvgBrowserPageAccount;
