import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTags2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-2_svg__a"
      d="M7.733 22.63a1 1 0 01-1.414 0l-4.951-4.95a1 1 0 010-1.414L7.732 9.9a3.025 3.025 0 011.706-.76l4.72-.248a.883.883 0 01.946.946l-.249 4.72a3.025 3.025 0 01-.76 1.706zM3.491 16.974l3.535 3.535"
    />,
    <circle className="tags-2_svg__a" cx={11.572} cy={12.336} r={1.5} />,
    <path className="tags-2_svg__a" d="M11.258 9.047a6 6 0 111.425 2.269" />
  );

export default SvgTags2;
