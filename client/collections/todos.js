import {Mongo} from 'meteor/mongo';
import MainAppConnection from '../services/mainapp_connection';

export default new Mongo.Collection('todos', { connection: MainAppConnection });