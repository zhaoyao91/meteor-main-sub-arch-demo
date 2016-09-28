import {Meteor} from 'meteor/meteor';
const settings = Meteor.settings.public;

export default {
  MAIN_APP_URL: settings.MAIN_APP_URL
}