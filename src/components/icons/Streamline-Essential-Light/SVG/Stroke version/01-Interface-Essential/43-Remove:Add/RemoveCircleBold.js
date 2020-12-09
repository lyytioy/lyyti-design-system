import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveCircleBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-circle-bold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="remove-circle-bold_svg__a" cx={12} cy={12} r={11} />,
    <path
      className="remove-circle-bold_svg__a"
      d="M17.657 16.243a1 1 0 000-1.414L14.828 12l2.829-2.828a1 1 0 000-1.414l-1.415-1.414a1 1 0 00-1.414 0L12 9.173 9.172 6.344a1 1 0 00-1.414 0L6.344 7.758a1 1 0 000 1.414L9.172 12l-2.828 2.829a1 1 0 000 1.414l1.414 1.415a1 1 0 001.414 0L12 14.828l2.828 2.83a1 1 0 001.414 0z"
    />
  );

export default SvgRemoveCircleBold;
