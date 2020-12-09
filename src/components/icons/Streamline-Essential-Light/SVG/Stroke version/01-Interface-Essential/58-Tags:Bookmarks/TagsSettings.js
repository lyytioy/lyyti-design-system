import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-settings_svg__a"
      d="M16.542 9.049l1.8-1.837a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007l1.05-1.072"
    />,
    <circle className="tags-settings_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <circle
      className="tags-settings_svg__a"
      cx={17.292}
      cy={17.029}
      r={1.438}
    />,
    <path
      className="tags-settings_svg__a"
      d="M18.513 11.468l.424 1.392a.951.951 0 001.125.653l1.411-.327a1.283 1.283 0 011.221 2.126l-.988 1.064a.96.96 0 000 1.3l.987 1.065a1.283 1.283 0 01-1.221 2.126l-1.411-.327a.951.951 0 00-1.124.653l-.424 1.392a1.275 1.275 0 01-2.442 0l-.424-1.385a.951.951 0 00-1.125-.653l-1.411.327a1.283 1.283 0 01-1.22-2.126l.986-1.065a.96.96 0 000-1.3l-.986-1.065a1.283 1.283 0 011.22-2.126l1.411.327a.952.952 0 001.125-.653l.424-1.392a1.276 1.276 0 012.442-.006z"
    />
  );

export default SvgTagsSettings;
