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
      d="M18.5 15.508v4M20.5 17.508h-4M18.946 23.423l.461-.176c2.193-.835 4.093-2.937 4.093-5.282v-2.827a.87.87 0 00-.523-.8 13.178 13.178 0 00-4.5-.832 12.929 12.929 0 00-4.459.832.87.87 0 00-.523.8v2.827a6.06 6.06 0 004.057 5.282l.461.176a1.313 1.313 0 00.933 0zM11.5 13.508H.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .508a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.725c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a5.038 5.038 0 01.4 1.2M10.912.745A2.573 2.573 0 0112 .508a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a4.28 4.28 0 01.269.694"
    />
  );

export default SvgMultipleActionsShield;
