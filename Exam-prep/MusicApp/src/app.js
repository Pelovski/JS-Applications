import page from '../node_modules/page/page.mjs';
import { homeView } from './views/homeview.js';
import { renderNavigationMiddleware, renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { loginView } from './views/loginView.js';

 page(renderNavigationMiddleware);
 page(renderContentMiddleware);

 page('/', homeView);
 page('/login', loginView)

page.start();