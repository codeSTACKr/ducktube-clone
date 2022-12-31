import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1518,
        canvasHeight: 1105,
        windowWidth: 1456,
        windowHeight: 706
    }
});
