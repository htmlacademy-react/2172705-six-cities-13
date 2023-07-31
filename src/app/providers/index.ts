import compose from 'compose-function';
import { withHelmet } from './with-helmet';
import { withRedux } from './with-redux';
import { withRollbar } from './with-rollbar';
import { withRouter } from './with-router';

export const withProviders = compose(withRollbar, withHelmet, withRedux, withRouter);
