import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentAccordian = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-accordian_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-accordian_svg__a"
      d="M9.287 17.217a1 1 0 01-.7 1.23l-2.892.8a2 2 0 01-2.461-1.395L.572 8.214a2 2 0 011.4-2.461l2.891-.8a1 1 0 011.231.7zM3.464 7.414l2.891-.799M3.997 9.342l2.891-.8M5.063 13.197l2.891-.799M5.596 15.125l2.891-.8M6.129 17.052l2.891-.799M14.533 17.086a1 1 0 00.674 1.243l2.876.855a2 2 0 002.487-1.348l2.847-9.586a2 2 0 00-1.347-2.487l-2.876-.854a1 1 0 00-1.244.674z"
    />,
    <path
      className="instrument-accordian_svg__a"
      d="M20.47 7.636a.25.25 0 11-.311.168.249.249 0 01.311-.168M19.616 10.511a.25.25 0 11-.311.169.25.25 0 01.311-.169M18.762 13.387a.25.25 0 11-.311.169.25.25 0 01.311-.169M17.907 16.263a.25.25 0 11-.31.168.25.25 0 01.31-.168M12 13.181v-8.5M10 12.181l-1-7M14 12.181l1-7"
    />
  );

export default SvgInstrumentAccordian;
