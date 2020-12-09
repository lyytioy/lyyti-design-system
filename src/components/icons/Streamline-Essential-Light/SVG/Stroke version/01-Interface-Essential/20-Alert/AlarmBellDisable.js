import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-disable_svg__a"
      d="M11 21.5a2 2 0 01-4 0M9.5 6.552A2.459 2.459 0 009 6.5 2.5 2.5 0 006.5 9a6.5 6.5 0 00-4 6v4.5a2 2 0 01-2 2h17a2 2 0 01-2-2V15a6.444 6.444 0 00-.059-.778"
    />,
    <circle className="alarm-bell-disable_svg__a" cx={17.5} cy={6.501} r={6} />,
    <path
      className="alarm-bell-disable_svg__a"
      d="M14.8 9.201l5.4-5.399M20.2 9.201l-5.4-5.399"
    />
  );

export default SvgAlarmBellDisable;
