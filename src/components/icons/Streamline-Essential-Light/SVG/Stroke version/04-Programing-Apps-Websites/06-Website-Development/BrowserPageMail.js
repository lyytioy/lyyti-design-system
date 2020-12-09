import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-mail_svg__a"
      x={0.5}
      y={2.5}
      width={23}
      height={19}
      rx={2}
      ry={2}
    />,
    <path
      className="browser-page-mail_svg__a"
      d="M.5 7.5h23M4 4.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="browser-page-mail_svg__a"
      x={3.5}
      y={13.5}
      width={6}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="browser-page-mail_svg__a"
      d="M3.5 10.5H17M12.5 13.5h7M12.5 16.5h7M3.66 13.633l5.68 4.734M3.66 18.367l5.68-4.734"
    />
  );

export default SvgBrowserPageMail;
