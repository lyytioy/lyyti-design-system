import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeDislike = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm6.769 13.327a1.18 1.18 0 01-.949.477h-2.893a1.183 1.183 0 00-.934.457 1.169 1.169 0 00-.206 1.016l.52 1.963a1 1 0 01-.192.888 1.014 1.014 0 01-1.611-.054L9.62 13.64a1.181 1.181 0 00-.964-.5H6.75a.25.25 0 01-.25-.25V8.306a.252.252 0 01.136-.223c.189-.1.377-.193.567-.288 4.329-2.188 4.118-1.761 7.824-1.761 1.553 0 2.335 1.006 2.792 2.482v.009l1.125 3.755v.007a1.169 1.169 0 01-.175 1.04z" />
  );

export default SvgLikeDislike;
