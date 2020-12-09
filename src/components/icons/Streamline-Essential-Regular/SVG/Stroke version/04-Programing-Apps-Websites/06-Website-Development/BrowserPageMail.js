import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-mail_svg__a"
      x={1.5}
      y={2.25}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="browser-page-mail_svg__a" d="M1.5 6.75h21" />,
    <rect
      className="browser-page-mail_svg__a"
      x={4.5}
      y={9.75}
      width={15}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="browser-page-mail_svg__a"
      x={4.5}
      y={15.75}
      width={4.5}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <path className="browser-page-mail_svg__a" d="M12 15.75h7.5M12 18.75h7.5" />
  );

export default SvgBrowserPageMail;
