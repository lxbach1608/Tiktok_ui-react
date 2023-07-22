import { DefaultLayout, HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Following from '~/pages/Following';

const publicRoute = [
    { path: '/home', component: Home, layout: DefaultLayout },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/following', component: Following, layout: null },
];

const privateRoute = [];

export { publicRoute, privateRoute };
