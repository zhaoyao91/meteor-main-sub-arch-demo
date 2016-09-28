import MainAppConnection from './services/mainapp_connection';
import MainAppAccounts from './services/mainapp_accounts';
import Users from './collections/users';
import Todos from './collections/todos';

// 可以使用subscribe, call等方法
window.MainAppConnection = MainAppConnection;

// 可以使用createUser, loginWithPassword, logout等方法
window.MainAppAccounts = MainAppAccounts;

// 可以使用Users、Todos集合，相关订阅数据会保存在里面