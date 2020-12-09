import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionHandFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-hand-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="composition-hand-frame_svg__a"
      d="M2.5 1.5h5a2 2 0 012 2v2H15a1.5 1.5 0 010 3H5.5l.548 2.192a1.455 1.455 0 01-2.824.706L2.5 8.5M.5.5h1a1 1 0 011 1v7a1 1 0 01-1 1h-1M21.5 22.5h-5a2 2 0 01-2-2v-2H9a1.5 1.5 0 010-3h9.5l-.548-2.192a1.455 1.455 0 012.824-.706l.724 2.9M23.5 23.5h-1a1 1 0 01-1-1v-7a1 1 0 011-1h1M2.5 16v1.5a1 1 0 001 1H5M21 8V6.5a1 1 0 00-1-1h-1.5"
    />
  );

export default SvgCompositionHandFrame;
