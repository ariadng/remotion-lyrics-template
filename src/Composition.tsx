import { BackgroundVideo } from './components/BackgroundVideo';
import { Lyrics } from './components/Lyrics';
import { AccountHandler } from './components/AccountHandler';

export const MyComposition = () => {
	return (
		<>
			<BackgroundVideo />
			<Lyrics />
			<AccountHandler label='kautsarmedia' />
		</>
	);
};
