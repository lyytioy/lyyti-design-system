import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12.75 13.749h5.75a.25.25 0 01.25.25v2.5a.5.5 0 00.309.462.512.512 0 00.191.039.5.5 0 00.354-.147l4-4a.5.5 0 000-.707l-4-4a.506.506 0 00-.545-.108.5.5 0 00-.309.462V11a.25.25 0 01-.25.25h-5.75a1.25 1.25 0 000 2.5z" />,
    <rect x={0.25} y={-0.001} width={8.5} height={24} rx={2} ry={2} />
  );

export default SvgMoveRight;
