/* eslint-disable react/display-name */
import { Suspense } from 'react';
import Loading from './loading';

const Loadable = (Component) => (props) =>
(
    <Suspense fallback={<Loading />}>
        <Component {...props} />
    </Suspense>
);

export default Loadable;
