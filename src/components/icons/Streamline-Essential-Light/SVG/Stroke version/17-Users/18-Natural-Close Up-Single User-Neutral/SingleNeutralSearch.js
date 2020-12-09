import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-search_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-search_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={10}
    />,
    <path
      className="single-neutral-search_svg__cls-1"
      d="M23.5 23.5l-5.929-5.929M16 16s-2.02-.892-3.432-1.415c-.926-.344-.794-1.907-.258-2.494a4.283 4.283 0 001.259-3.531A3 3 0 0010.5 5.28a3 3 0 00-3.069 3.279A4.283 4.283 0 008.69 12.09c.536.587.668 2.15-.258 2.494C7.02 15.107 5 16 5 16"
    />
  );

export default SvgSingleNeutralSearch;
