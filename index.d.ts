import type { ReactEventHandler } from 'react';

// TODO: Remove this once react 18 upgrade is complete
// https://github.com/mui/material-ui/issues/35287

declare global {
  namespace React {
    interface DOMAttributes<T> {
      onResize?: ReactEventHandler<T> | undefined;
      onResizeCapture?: ReactEventHandler<T> | undefined;
      nonce?: string | undefined;
    }
  }
}
