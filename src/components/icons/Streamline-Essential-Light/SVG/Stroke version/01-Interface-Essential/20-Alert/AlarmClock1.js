import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmClock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-clock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="alarm-clock-1_svg__a" cx={12} cy={13.001} r={9} />,
    <path
      className="alarm-clock-1_svg__a"
      d="M7.314 20.686L4.5 23.501M16.686 20.686l2.814 2.815M12 6.501v6.5h3.5M1.944 8.554a11.027 11.027 0 015.609-5.609 3.984 3.984 0 10-5.609 5.609zM22.056 8.554a11.027 11.027 0 00-5.609-5.609 3.984 3.984 0 115.609 5.609z"
    />
  );

export default SvgAlarmClock1;
