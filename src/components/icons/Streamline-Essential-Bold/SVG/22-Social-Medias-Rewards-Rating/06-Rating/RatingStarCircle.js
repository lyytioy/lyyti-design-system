import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm6.216 10.376l-2.788 2.485a.5.5 0 00-.126.572l1.629 3.749a.5.5 0 01-.7.634l-3.982-2.242a.5.5 0 00-.491 0l-3.985 2.242a.5.5 0 01-.7-.634L8.7 13.433a.5.5 0 00-.126-.572l-2.79-2.485a.5.5 0 01.332-.876h3.31a.5.5 0 00.46-.3l1.655-3.84a.5.5 0 01.918 0l1.655 3.84a.5.5 0 00.46.3h3.31a.5.5 0 01.332.873z" />
  );

export default SvgRatingStarCircle;
