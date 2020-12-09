import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-ribbon_svg__a"
      d="M20.5 22.7c0 .55-.378.755-.84.457L12 18.2l-7.66 4.96c-.462.3-.84.093-.84-.457V1.7a1 1 0 011-1h15a1 1 0 011 1z"
    />,
    <path
      className="love-it-ribbon_svg__a"
      d="M12 15.152s5.5-3.961 5.5-6.893c0-3.385-4.5-4.455-5.5-.34-1-4.115-5.5-3.045-5.5.34 0 2.932 5.5 6.893 5.5 6.893z"
    />
  );

export default SvgLoveItRibbon;
