import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusFlower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={10.75} y={15.5} width={2} height={8.5} rx={0.25} ry={0.25} />,
    <ellipse
      cx={18.5}
      cy={19.25}
      rx={6.538}
      ry={1.541}
      transform="rotate(-45 18.5 19.25)"
    />,
    <ellipse
      cx={5.25}
      cy={19.5}
      rx={1.5}
      ry={6.185}
      transform="rotate(-45 5.25 19.5)"
    />,
    <path d="M11.75 13.986a7.509 7.509 0 007.5-7.5V1.07c0-1.045-.892-1.315-1.561-.646l-2.262 2.262a.25.25 0 01-.354 0L12.811.424a1.54 1.54 0 00-2.122 0L8.427 2.686a.25.25 0 01-.354 0L5.811.424C5.134-.253 4.25.037 4.25 1.07v5.416a7.509 7.509 0 007.5 7.5z" />
  );

export default SvgFocusFlower;
