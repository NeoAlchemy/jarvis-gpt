import React, { lazy, Suspense } from 'react';

const LazyArcReactor = lazy(() => import('./ArcReactor'));

const ArcReactor = props => (
  <Suspense fallback={null}>
    <LazyArcReactor {...props} />
  </Suspense>
);

export default ArcReactor;
