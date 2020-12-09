import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVinylRecordGramophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vinyl-record-gramophone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="vinyl-record-gramophone_svg__a"
      x={0.75}
      y={17.25}
      width={22.5}
      height={6}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="vinyl-record-gramophone_svg__a"
      d="M2.25 14.25h12M8.25 12.75v4.5M20.25 9.75a4.36 4.36 0 011.1 4.907l-1.229 2.593M12.75.75l-4.5 9h12l-7.5-9z"
    />
  );

export default SvgVinylRecordGramophone;
