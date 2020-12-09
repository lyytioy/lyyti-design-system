import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonSyncing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-syncing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-syncing_svg__a"
      d="M6.75 6.03a6 6 0 00-6 6 6 6 0 006 6h6.75l-5.539 4.309a.75.75 0 01-1.211-.592V18.03M17.25 6.03V2.314a.75.75 0 00-1.21-.592L10.5 6.03h6.75a6 6 0 016 6 6 6 0 01-6 6"
    />
  );

export default SvgButtonSyncing;
