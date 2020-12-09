import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22.044 0H1.956A1.959 1.959 0 000 1.954v20.088A1.959 1.959 0 001.956 24h20.088A1.959 1.959 0 0024 22.042V1.954A1.959 1.959 0 0022.044 0zM21 22l-18 .04a1 1 0 01-1-1L1.958 3a1 1 0 011-1L21 1.956a1 1 0 011 1V21a1 1 0 01-1 1z" />,
    <path d="M11 8.248h8.5a.75.75 0 000-1.5H11a.75.75 0 000 1.5zM11 12.748h8.5a.75.75 0 000-1.5H11a.75.75 0 000 1.5zM11 17.248h5.5a.75.75 0 100-1.5H11a.75.75 0 000 1.5z" />,
    <rect
      x={3.5}
      y={12.998}
      width={4.875}
      height={4.875}
      rx={0.875}
      ry={0.875}
    />,
    <rect
      x={3.5}
      y={5.623}
      width={4.875}
      height={4.875}
      rx={0.875}
      ry={0.875}
    />
  );

export default SvgParagraphBullets;
