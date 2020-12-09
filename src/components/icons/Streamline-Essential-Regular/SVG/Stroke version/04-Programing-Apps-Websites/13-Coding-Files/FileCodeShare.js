import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-share_svg__a"
      cx={13.499}
      cy={18.003}
      r={2.25}
    />,
    <circle
      className="file-code-share_svg__a"
      cx={20.999}
      cy={21.003}
      r={2.25}
    />,
    <circle
      className="file-code-share_svg__a"
      cx={20.999}
      cy={13.503}
      r={2.25}
    />,
    <path
      className="file-code-share_svg__a"
      d="M15.423 16.849l3.65-2.19M15.587 18.839l3.324 1.329M8.249 20.253h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.44l2.871 2.871a1.5 1.5 0 01.44 1.061v3.128"
    />,
    <rect
      className="file-code-share_svg__a"
      x={6.749}
      y={5.253}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-share_svg__a"
      d="M3.749 5.253v4.5M12.749 5.253v4.5"
    />,
    <rect
      className="file-code-share_svg__a"
      x={3.749}
      y={12.753}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeShare;
