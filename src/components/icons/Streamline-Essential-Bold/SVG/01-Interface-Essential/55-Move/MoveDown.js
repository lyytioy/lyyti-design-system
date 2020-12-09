import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12.5 11.5a1.25 1.25 0 00-1.25 1.25v5.75a.25.25 0 01-.25.25H8.5a.5.5 0 00-.353.853l4 4a.5.5 0 00.707 0l4-4a.5.5 0 00-.354-.853H14a.25.25 0 01-.25-.25v-5.75a1.25 1.25 0 00-1.25-1.25z" />,
    <rect y={0.249} width={24} height={8.5} rx={2} ry={2} />
  );

export default SvgMoveDown;
