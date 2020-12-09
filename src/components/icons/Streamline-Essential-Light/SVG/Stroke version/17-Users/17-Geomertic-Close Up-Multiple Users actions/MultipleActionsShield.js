import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-shield_svg__cls-1"
      d="M10.5 15.5H.5a6 6 0 0110.472-4"
    />,
    <circle
      className="multiple-actions-shield_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-shield_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-shield_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.473-.3M18.5 15.5v4M20.5 17.5h-4M18.946 23.415l.461-.176C21.6 22.4 23.5 20.3 23.5 17.957V15.13a.87.87 0 00-.523-.8 13.178 13.178 0 00-4.5-.832 12.929 12.929 0 00-4.459.832.87.87 0 00-.523.8v2.827a6.06 6.06 0 004.057 5.282l.461.176a1.313 1.313 0 00.933 0z"
    />
  );

export default SvgMultipleActionsShield;
