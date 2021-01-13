import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 21C.673 21 0 20.327 0 19.5v-16C0 2.673.673 2 1.5 2H4V.5a.5.5 0 011 0V2h3V.5a.5.5 0 011 0V2h3V.5a.5.5 0 011 0V2h2.5c.827 0 1.5.673 1.5 1.5v5a.5.5 0 01-1 0v-5a.5.5 0 00-.5-.5H13v1.5a.5.5 0 01-1 0V3H9v1.5a.5.5 0 01-1 0V3H5v1.5a.5.5 0 01-1 0V3H1.5a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h8a.5.5 0 010 1h-8z" />,
    <path d="M17.5 24a6.459 6.459 0 01-4.617-1.929A6.458 6.458 0 0111 17.5c0-3.584 2.916-6.5 6.5-6.5 1.719 0 3.338.666 4.564 1.876a.3.3 0 01.062.063A6.448 6.448 0 0124 17.5c0 3.584-2.916 6.5-6.5 6.5zm-3.517-2.276A5.476 5.476 0 0017.5 23c3.033 0 5.5-2.467 5.5-5.5 0-1.29-.451-2.529-1.276-3.517l-7.741 7.741zM17.5 12a5.506 5.506 0 00-5.5 5.5c0 1.29.451 2.529 1.276 3.517l7.742-7.742A5.485 5.485 0 0017.5 12z" />
  );

export default SvgNotesDisable;