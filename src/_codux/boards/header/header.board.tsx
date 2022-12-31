import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    environmentProps: {
        windowWidth: 1402,
        canvasWidth: 1130
    }
});
