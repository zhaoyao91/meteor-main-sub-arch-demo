import {DDP} from 'meteor/ddp';
import Settings from '/client/settings';

const MainAppConnection = DDP.connect(Settings.MAIN_APP_URL);

export default MainAppConnection;
