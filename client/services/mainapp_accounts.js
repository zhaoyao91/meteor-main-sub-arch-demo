import {AccountsClient} from 'meteor/accounts-base';
import extendAccounts from 'meteor/local:extend-accounts';

import MainAppConnection from './mainapp_connection';

const MainAppAccounts = new AccountsClient({ connection: MainAppConnection });
extendAccounts(MainAppAccounts);

export default MainAppAccounts;