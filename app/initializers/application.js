
import currentUser from '../models/current-user';

export function initialize( container, application ) {
  application.register('application:variables', currentUser, {singleton: true});
  application.inject('controller', 'currentUser', 'application:variables');
}

export default {
  name: 'application',
  initialize: initialize
};
