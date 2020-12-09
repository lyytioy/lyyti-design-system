import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCog = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cog_svg__a"
      d="M20.254 13.5H22.5a1 1 0 001-1v-1a1 1 0 00-1-1h-2.247a11.8 11.8 0 00-1-2.922l1.589-1.588a1 1 0 000-1.414l-1.418-1.414a1 1 0 00-1.414 0l-1.59 1.589a11.769 11.769 0 00-2.92-1V1.5a1 1 0 00-1-1h-1a1 1 0 00-1 1v2.249a11.777 11.777 0 00-2.921 1l-1.59-1.587a1 1 0 00-1.414 0L3.16 4.577a1 1 0 000 1.414L4.75 7.58a11.821 11.821 0 00-1 2.921H1.5a1 1 0 00-1 1v1a1 1 0 001 1h2.246a11.821 11.821 0 001 2.921l-1.59 1.59a1 1 0 000 1.414l1.419 1.414a1 1 0 001.414 0l1.589-1.59a11.8 11.8 0 002.922 1v2.25a1 1 0 001 1h1a1 1 0 001-1v-2.245a11.8 11.8 0 002.92-1l1.591 1.589a1 1 0 001.414 0l1.414-1.414a1 1 0 000-1.414l-1.589-1.59a11.821 11.821 0 001.004-2.926z"
    />,
    <circle className="cog_svg__a" cx={12} cy={12.001} r={4.5} />
  );

export default SvgCog;
