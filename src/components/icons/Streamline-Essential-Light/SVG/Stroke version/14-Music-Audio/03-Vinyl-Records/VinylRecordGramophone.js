import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVinylRecordGramophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vinyl-record-gramophone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vinyl-record-gramophone_svg__a"
      x={3.5}
      y={17.46}
      width={17}
      height={5}
      rx={1}
      ry={1}
    />,
    <path
      className="vinyl-record-gramophone_svg__a"
      d="M17.5 23.476V22.46M6.5 23.476V22.46M18.5 17.46h-2c3.5-3.5-6.5-8.5-12.131-6.238L13.4.524C11.094 9.333 23 11.96 18.5 17.46zM4.5 15.46h10M9.5 14.46v3"
    />
  );

export default SvgVinylRecordGramophone;
