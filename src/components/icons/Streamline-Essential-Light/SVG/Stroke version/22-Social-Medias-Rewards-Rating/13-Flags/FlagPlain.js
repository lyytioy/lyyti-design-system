import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagPlain = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-plain_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-plain_svg__a"
      d="M1.773 9.5l4.243-4.244a1 1 0 011.414 0l1.415 1.415L14.5 1.014a1 1 0 011.414 0l7.071 7.071a1 1 0 010 1.414l-7.72 7.721a.5.5 0 01-.8-.132c-.813-1.646.744-4.053.744-4.053l-4.95 4.95M8.845 6.671l6.363 6.363M.723 11.278l12 12"
    />
  );

export default SvgFlagPlain;
