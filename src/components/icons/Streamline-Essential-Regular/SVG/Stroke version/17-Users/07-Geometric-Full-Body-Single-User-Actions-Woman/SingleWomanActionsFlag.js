import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-flag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-flag_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-flag_svg__cls-1"
      d="M9.756 9.833a5.329 5.329 0 00-.871-.719L6 13.5 3.114 9.114A5.243 5.243 0 00.75 13.5v2.25H3l.75 7.5h4.5l.75-7.5h.75M3 3.75S3 7.5.75 7.5M9 3.75s0 2.528 1.245 3.433M12.75 9v14.25M12.75 17.268l1.5-.509a4.249 4.249 0 013.75.509 4.249 4.249 0 003.745.508l1.5-.508V8.983l-1.5.509A4.249 4.249 0 0118 8.983a4.249 4.249 0 00-3.746-.509l-1.5.509z"
    />
  );

export default SvgSingleWomanActionsFlag;
