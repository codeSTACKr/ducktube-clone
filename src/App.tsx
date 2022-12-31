
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { SideBar } from './components/side-bar/side-bar';
import { Filters } from './components/filters/filters';
import { VideoPreview } from './components/video-preview/video-preview';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <div className={styles['App-body']}>
                <SideBar />
                <div className={styles['App-main']}>
                    <Filters />
                    <div className={styles['App-grid']}>
                        <VideoPreview thumbnail={'https://i3.ytimg.com/vi/4xuBT3BbsYU/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s48-c-k-c0x00ffffff-no-rj'} title={'Build Your Own SaaS - PagerDuty Clone. You\'ll Learn...'} channel={'freeCodeCamp.org'} views={'72K views • 10 days ago'} varified />
                        <VideoPreview thumbnail={'https://i3.ytimg.com/vi/JBvAWY_gDSc/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/ytc/AMLnZu9gL-o78sHL9B6BROC71ohuPzdo7ud65Q7T3jXQEA=s48-c-k-c0x00ffffff-no-rj'} title={'The Biggest Lie Still Being Told To New Developers'} channel={'CodingPhase'} views={'752 views • 8 hours ago'} />
                        <VideoPreview thumbnail={'https://i3.ytimg.com/vi/dCCaYEG5KeA/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/ytc/AMLnZu9FLR7tH1kY8h96dl0sAPVE1EWXDNis3_SiNN5HKA=s48-c-k-c0x00ffffff-no-rj'} title={'Technologies I\'m Learning in 2023'} channel={'Ben Awad'} views={'752 views • 8 hours ago'} varified />
                        <VideoPreview thumbnail={'https://i3.ytimg.com/vi/461735zrjzY/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/ytc/AMLnZu9n7GH1zZmpY9J8kB-BqUwy_2JoaP3hQo4rZw1W=s48-c-k-c0x00ffffff-no-rj'} title={'React Is This Fast???'} channel={'ThePrimeagen'} views={'86K views • 1 month ago'} varified />
                        <VideoPreview thumbnail={'https://i3.ytimg.com/vi/BHil0nuR45U/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/M5177JH4bSDoTINrdCTMn0OiXDdVdba3eewk5bxl654e4ZWfr310YE4AKCIB9qAE0ex0vto7qA=s48-c-k-c0x00ffffff-no-rj'} title={'[live] Dev Rel Day in The Life - Helping With Issues For...'} channel={'bashbunni'} views={'953 views • Streamed 9 days ago'} />
                        <VideoPreview thumbnail={'https://i3.ytimg.com/vi/4ThnAKy4okM/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/ytc/AMLnZu_92YKnhvarB3MBxCPK9fggv3AjQAhkjaEIz_QOkA=s48-c-k-c0x00ffffff-no-rj'} title={'How to Refactor a Web Design - Like a Pro'} channel={'DesignCourse'} views={'5.4K views • 12 hours ago'} varified />
                        <VideoPreview thumbnail={'https://i3.ytimg.com/vi/DbF96IHOZig/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/ytc/AMLnZu_fG-i4GM3kKAMH6sVHs_dwObZVgPmvTcr7njfiTw=s48-c-k-c0x00ffffff-no-rj'} title={'you need to monitor your stuff RIGHT NOW!! (free)'} channel={'NetworkChuck'} views={'270K views • 3 weeks ago'} varified />
                        <VideoPreview thumbnail={'https://i3.ytimg.com/vi/iOWg95FLHHE/maxresdefault.jpg'} avatar={'https://yt3.ggpht.com/ivwidjUdWTN6um1nYcgbq7Kkm5o13BpUOIBaD6IuFxrrtNcAdWa8heY_Mbvy-IKRJUuvhgACFJ8=s48-c-k-c0x00ffffff-no-rj'} title={'Don\'t Migrate To tRPC'} channel={'Theo - t3.gg'} views={'27K views • 2 days ago'} />
                    </div></div>
            </div></div>
    );
}

export default App;
