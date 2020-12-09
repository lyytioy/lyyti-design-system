import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentContrabassSheet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-contrabass-sheet_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-contrabass-sheet_svg__a"
      d="M5.591 8.5a3.953 3.953 0 00-3.973 4.37 2.535 2.535 0 01-.679 4.369.5.5 0 00-.349.482 4.965 4.965 0 005 4.779 4.965 4.965 0 005-4.779.5.5 0 00-.349-.481 2.536 2.536 0 01-.679-4.37A3.952 3.952 0 005.591 8.5zM5.59 13.833V.5M5.59 23.5v-2.549M4.09 4.5h3M4.09 2.5h3M12.451 13.664a1 1 0 00.986.836h8.306a1 1 0 00.986-.836l.667-4A1 1 0 0022.41 8.5h-9.639a1 1 0 00-.987 1.164zM17.59 12.5v11M14.09 23.5l3.5-3 3.5 3"
    />
  );

export default SvgInstrumentContrabassSheet;
