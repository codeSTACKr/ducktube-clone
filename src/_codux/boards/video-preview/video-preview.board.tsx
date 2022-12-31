import { createBoard } from '@wixc3/react-board';
import { VideoPreview } from '../../../components/video-preview/video-preview';

export default createBoard({
    name: 'VideoPreview',
    Board: () => <VideoPreview thumbnail={'https://i3.ytimg.com/vi/4xuBT3BbsYU/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s48-c-k-c0x00ffffff-no-rj'} title={'Build Your Own SaaS - PagerDuty Clone. You\'ll Learn...'} channel={'freeCodeCamp.org'} views={'72K • 10 days ago'} varified></VideoPreview>,
    environmentProps: {
        windowWidth: 410,
        canvasWidth: 300,
    }
});
