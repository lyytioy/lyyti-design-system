import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-home_svg__cls-1"
      d="M1.5 23.5a1 1 0 01-1-1V8.8a1 1 0 01.429-.821l10.5-7.3a1 1 0 011.142 0l10.5 7.3a1 1 0 01.429.821v13.7a1 1 0 01-1 1z"
    />,
    <path
      className="single-neutral-home_svg__cls-1"
      d="M19.5 21a5.672 5.672 0 00-.652-2.3c-.46-.919-2.38-1.557-4.792-2.45-.706-.262-.782-1.682-.256-2.261a4.813 4.813 0 001.252-3.73A2.984 2.984 0 0012 7a2.984 2.984 0 00-3.052 3.261 4.813 4.813 0 001.252 3.73c.526.579.45 2-.256 2.261-2.412.893-4.332 1.531-4.792 2.45A5.672 5.672 0 004.5 21"
    />
  );

export default SvgSingleNeutralHome;
