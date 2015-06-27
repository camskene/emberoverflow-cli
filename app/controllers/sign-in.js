import Ember from 'ember';
import { raw as ajax } from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    signIn: function() {
      var self = this;
      var email = this.get('email');

      if(Ember.isEmpty(this.get('email'))) {
        alert('Wrong e-mail');
      } else {
        ajax({
          url: 'http://localhost:3000/v2/users/authenticate',
          type: 'POST',
          data: {email:email},
        })
        .then(function(res) {
          localStorage['userToken'] = res.response.token;
          self.set('currentUser.userToken', res.response.token);
        });
      }
    }
  }
});
