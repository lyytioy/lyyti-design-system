import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-settings_svg__a"
      cx={10.021}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-settings_svg__a"
      d="M10.021 12.5c-5.246 0-9.5-1.79-9.5-4M10.021 17c-5.246 0-9.5-1.79-9.5-4"
    />,
    <path
      className="database-settings_svg__a"
      d="M10.021 21.5c-5.246 0-9.5-1.79-9.5-4v-13M19.521 4.501l-.001 4.5"
    />,
    <circle
      className="database-settings_svg__a"
      cx={17.77}
      cy={17.032}
      r={1.438}
    />,
    <path
      className="database-settings_svg__a"
      d="M18.991 11.471l.424 1.392a.951.951 0 001.125.653l1.411-.327a1.283 1.283 0 011.221 2.126l-.988 1.064a.96.96 0 000 1.3l.987 1.064a1.283 1.283 0 01-1.221 2.126l-1.411-.327a.951.951 0 00-1.124.653l-.424 1.392a1.275 1.275 0 01-2.442 0l-.424-1.387A.951.951 0 0015 20.547l-1.411.327a1.283 1.283 0 01-1.221-2.126l.987-1.064a.96.96 0 000-1.3l-.987-1.065a1.283 1.283 0 011.221-2.126l1.411.322a.952.952 0 001.125-.653l.424-1.392a1.275 1.275 0 012.442.001z"
    />
  );

export default SvgDatabaseSettings;
