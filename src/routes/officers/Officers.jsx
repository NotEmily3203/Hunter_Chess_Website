import React from 'react';
import { Bio , Navbar} from '../../components';
import { p,vp,smm,t} from './imports'
const Officers = () =>{
    return(
    <div className='bruh gradient__bg'>
        <Navbar/>
        <Bio imgUrl={p} title="President" name="Raymond Leu" grade="Junior" major="Psychology" about="I got into chess thanks to the Hunter College Chess club in my freshman year after playing  a little online during COVID. I'm a junior now, and this community was a key part of my college experience, and I've made so many friends doing it. I don't care who you are, the best thing about chess is how it lets anyone with any background play."/>
        <Bio imgUrl={vp} title="Vice President" name="Daniella" grade="Junior" major="Biochemistry" about="During the 2023 spring semester I was on the third floor lounge area between classes and noticed people playing chess. When someone noticed me watching they invited me to play. Everyone was really welcoming and Raymond gave me the discord so I would know when things were happening and when I could stop by for a game. After that it was really easy to make friends and get involved."/>
        <Bio imgUrl={smm} title="Social Media Manager" name="Matthew Jendroska" grade="Junior" major="History Education" about="What got me into chess was how welcoming and friendly the chess club at hunter was. I was just a novice player freshman year and they welcomed me with open arms."/>
        <Bio imgUrl={t} title="Treasurer" name="Brian Hoang" grade="Junior" major="Biochemistry" about="I honestly don't fully remember why I got into chess but I did it in high school to hang out and kill some time on the weekends. It ended up being somewhat of a competition to get better between us but overall it was for social purposes."/>    </div>
    )
}


export default Officers