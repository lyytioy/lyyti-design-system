import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-setting_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-setting_svg__cls-1"
      d="M.75 17.249a6.753 6.753 0 019.4-6.208M3.945 2.78a6.844 6.844 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-setting_svg__cls-1"
      cx={7.5}
      cy={4.874}
      r={4.125}
    />,
    <circle
      className="single-man-actions-setting_svg__cls-1"
      cx={17.25}
      cy={16.499}
      r={1.5}
    />,
    <path
      className="single-man-actions-setting_svg__cls-1"
      d="M18.524 10.7l.442 1.452a.992.992 0 001.173.681l1.473-.341a1.338 1.338 0 011.274 2.218l-1.03 1.111a1 1 0 000 1.362l1.03 1.112a1.338 1.338 0 01-1.274 2.218l-1.473-.341a.992.992 0 00-1.173.681l-.442 1.447a1.331 1.331 0 01-2.549 0l-.442-1.452a.992.992 0 00-1.173-.681l-1.473.341a1.338 1.338 0 01-1.274-2.218l1.03-1.112a1 1 0 000-1.362l-1.03-1.111a1.338 1.338 0 011.274-2.218l1.473.341a.992.992 0 001.173-.681l.442-1.452a1.331 1.331 0 012.549.005z"
    />
  );

export default SvgSingleManActionsSetting;
