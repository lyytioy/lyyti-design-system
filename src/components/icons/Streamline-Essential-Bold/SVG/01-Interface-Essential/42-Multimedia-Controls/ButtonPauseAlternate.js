import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPauseAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 21.55A9.551 9.551 0 1121.551 12 9.562 9.562 0 0112 21.55z" />,
    <rect
      x={7.851}
      y={7.142}
      width={3.401}
      height={10.776}
      rx={0.98}
      ry={0.98}
    />,
    <rect
      x={12.721}
      y={7.101}
      width={3.456}
      height={10.776}
      rx={0.98}
      ry={0.98}
    />
  );

export default SvgButtonPauseAlternate;
