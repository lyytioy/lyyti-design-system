import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingLanguageHash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-language-hash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="programming-language-hash_svg__a"
      x={0.5}
      y={3}
      width={23}
      height={18}
      rx={2}
      ry={2}
    />,
    <path
      className="programming-language-hash_svg__a"
      d="M.5 8h23M4 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M8.5 12h7.969M7.5 15h7.969M9.484 16.969L11.5 10M12.484 16.969L14.5 10"
    />
  );

export default SvgProgrammingLanguageHash;
