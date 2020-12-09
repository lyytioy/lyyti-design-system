import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-settings_svg__a"
      cx={17.252}
      cy={16.503}
      r={1.5}
    />,
    <path
      className="file-code-settings_svg__a"
      d="M18.526 10.7l.443 1.452a.992.992 0 001.173.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.363l1.031 1.116a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.992.992 0 00-1.173.681l-.443 1.452a1.33 1.33 0 01-2.548 0l-.442-1.452a.993.993 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.363l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.993.993 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548-.005z"
    />,
    <path
      className="file-code-settings_svg__a"
      d="M8.252 20.253h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061v1.628"
    />,
    <rect
      className="file-code-settings_svg__a"
      x={6.752}
      y={5.253}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-settings_svg__a"
      d="M3.752 5.253v4.5M12.752 5.253v4.5"
    />,
    <rect
      className="file-code-settings_svg__a"
      x={3.752}
      y={12.753}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeSettings;
