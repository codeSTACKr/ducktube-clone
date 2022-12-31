import { createBoard } from '@wixc3/react-board';
import { Filters } from '../../../components/filters/filters';

export default createBoard({
    name: 'Filters',
    Board: () => <Filters />,
    environmentProps: {
        windowWidth: 966,
        windowHeight: 768,
        canvasWidth: 1910
    }
});
