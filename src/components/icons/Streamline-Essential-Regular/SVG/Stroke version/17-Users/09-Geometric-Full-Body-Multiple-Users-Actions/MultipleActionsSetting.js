import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-setting_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-setting_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-setting_svg__cls-1"
      d="M9.675 9.75A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.522-5.216"
    />,
    <circle
      className="multiple-actions-setting_svg__cls-1"
      cx={17.25}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="multiple-actions-setting_svg__cls-1"
      d="M18.525 10.7l.442 1.453a.993.993 0 001.173.681l1.473-.342a1.339 1.339 0 011.274 2.219l-1.03 1.111a1 1 0 000 1.362l1.03 1.111a1.338 1.338 0 01-1.274 2.218l-1.473-.341a.992.992 0 00-1.173.681l-.442 1.447a1.331 1.331 0 01-2.549 0l-.442-1.452a.992.992 0 00-1.173-.681l-1.473.341a1.338 1.338 0 01-1.274-2.218l1.03-1.111a1 1 0 000-1.362l-1.03-1.111a1.339 1.339 0 011.274-2.219l1.473.342a.993.993 0 001.173-.681l.442-1.453a1.331 1.331 0 012.549.005z"
    />,
    <circle
      className="multiple-actions-setting_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-setting_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsSetting;
