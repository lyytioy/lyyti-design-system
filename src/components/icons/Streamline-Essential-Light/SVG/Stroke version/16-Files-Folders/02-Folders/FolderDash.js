import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderDash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-dash_svg__a,.folder-dash_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}.folder-dash_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <path
      className="folder-dash_svg__a"
      d="M10.026 2.815l-.132-.262A1 1 0 009 2H8M12.5 5h-.762a1 1 0 01-.894-.553l-.1-.194M23.5 17v1.5M23.5 13v1.5M23.5 9.5V11M.5 17v1.5M.5 13v1.5M.5 9.5V11M.5 6v1.5M18 5h1.5M14.5 5H16M4 2h1.5M4.5 22H6M8 22h1.5M11.5 22H13M15 22h1.5M18.5 22H20"
    />,
    <path
      className="folder-dash_svg__b"
      d="M.5 20.5v.75a.75.75 0 00.75.75H2M23.5 20.5v.75a.75.75 0 01-.75.75H22M23.5 6.5v-.75a.75.75 0 00-.75-.75H22M.5 3.5v-.75A.75.75 0 011.25 2H2"
    />
  );

export default SvgFolderDash;
