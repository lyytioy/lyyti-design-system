import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelectCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-circle_svg__a"
      d="M22.284 16.706a11.1 11.1 0 01-1.18 2.032M16.938 22.235a7.314 7.314 0 01-1.083.459 7.455 7.455 0 01-1.125.344M9.292 23.038a7.49 7.49 0 01-1.125-.344 7.314 7.314 0 01-1.083-.459M2.918 18.739a11.132 11.132 0 01-1.179-2.033M.8 11.348a11.1 11.1 0 01.4-2.315M3.924 4.323a12.406 12.406 0 011.8-1.518M10.835.945l1.176-.062 1.176.062M18.3 2.805a12.452 12.452 0 011.8 1.518M22.819 9.033a11.039 11.039 0 01.4 2.315"
    />,
    <circle
      className="cursor-select-circle_svg__a"
      cx={12.011}
      cy={12.133}
      r={3.75}
    />
  );

export default SvgCursorSelectCircle;
