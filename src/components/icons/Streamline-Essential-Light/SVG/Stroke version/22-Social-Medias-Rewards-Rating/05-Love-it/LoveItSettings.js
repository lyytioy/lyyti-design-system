import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-settings_svg__a"
      d="M9.059 18L2.2 10.939a5.669 5.669 0 01-1.088-6.607A5.84 5.84 0 0110.4 2.845L12 4.3l1.6-1.459a5.84 5.84 0 019.287 1.487 5.654 5.654 0 01.369 4.2"
    />,
    <circle
      className="love-it-settings_svg__a"
      cx={17.75}
      cy={15.499}
      r={1.438}
    />,
    <path
      className="love-it-settings_svg__a"
      d="M18.971 9.938l.429 1.392a.951.951 0 001.125.653l1.411-.327a1.283 1.283 0 011.221 2.126l-.988 1.064a.96.96 0 000 1.3l.987 1.065a1.283 1.283 0 01-1.221 2.126l-1.411-.327a.951.951 0 00-1.124.653l-.424 1.392a1.275 1.275 0 01-2.442 0l-.423-1.392a.951.951 0 00-1.125-.653l-1.411.327a1.283 1.283 0 01-1.221-2.126l.987-1.065a.96.96 0 000-1.3l-.987-1.065a1.283 1.283 0 011.221-2.126l1.411.327a.952.952 0 001.125-.653l.423-1.392a1.275 1.275 0 012.437.001z"
    />
  );

export default SvgLoveItSettings;
