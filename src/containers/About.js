import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import HeroBanner from "../components/herobanner/HeroBanner";

import RichImage from "../assets/Rich-2.jpg";
import Richard2Image from "../assets/Richard_web.jpg";
import MikeImage from "../assets/Mike.jpg";
import PaulImage from "../assets/paul.png";
import DonnImage from "../assets/Donn-D.jpg";

const About = () => {
    return (
        <>
            <Layout>
                <HeroBanner heading="About Almost Famous"/>
                <section className="container my-5 py-5">
                    <p className="mb-5">Did you know that Mississauga is the home to:</p>
                    <ul className="mb-5">
                        <li>Former NHL coach and Hockey Night in Canada commentator Don Cherry</li>
                        <li>KFC’s founder Colonel Sanders</li>
                        <li>World’s oldest mayor Hazel “Hurricane” McCallion</li>
                    </ul>
                    <p className="mb-5">You can add to the list now, the soon-to-be-famous rock cover band, ALMOST FAMOUS.  You’re welcome Mississauga!</p>
                    <p className="mb-5">Formed back in early 2014, the group is a collection of guys who love to play and perform rock songs from their favorite artists – The Black Crowes, Lenny Kravitz, The Tragically Hip, The Beatles and ZZ Top to name just a few.</p>
                    <p className="mb-5">Their MISSION is to bring the fun, energy and excitement back into live music, whether that be at your favorite bar, concert venue, festival or corporate function.</p>
                    <p>THEY are <b>ALMOST FAMOUS</b>: Rich, Richard, Donn, Mike and Paul.</p>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={RichImage} />
                        <h3 className="text-center mt-4">~ Lead Vocals/ Band Manager ~ <br/> Rich</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={Richard2Image} />
                        <h3 className="text-center mt-4">~ Bass ~ <br/> Richard</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={DonnImage} />
                        <h3 className="text-center mt-4">~ Drums ~ <br/> Donn</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={MikeImage} />
                        <h3 className="text-center mt-4">~ Lead Guitar ~ <br/> Mike</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={PaulImage} />
                        <h3 className="text-center mt-4">~ Keyboards ~ <br/> Paul</h3>
                    </div>
                    <h3 className="pt-5 mt-5">Where we've performed</h3>
                    <ul class="list-unstyled">
                        <li>Lionheart – Mississauga (November 26, 2022)</li>
                        <li>The St. George Pub – Georgetown (October 8, 2022)</li>
                        <li>Honest Lawyer – Welland (October 1, 2022)</li>
                        <li>Oscar’s Roadhouse & Grill – Brampton</li>
                        <li>Honest Lawyer (Fennell) – Hamilton</li>
                        <li>Honest Lawyer (Downtown) – Hamilton</li>
                        <li>Cuchulainn’s Irish Pub – Mississauga</li>
                        <li>Dakota’s – Etobicoke</li>
                        <li>The Black Wolf Smokehouse – Orangeville</li>
                        <li>Drums N Flats – Ajax</li>
                        <li>The Horseshoe Tavern – Toronto</li>
                        <li>Stonewalls – Hamilton</li>
                        <li>Spot One – Brampton</li>
                        <li>Ellen’s Bar & Grill – Brampton</li>
                        <li>Duffy’s Tavern – Toronto</li>
                        <li>The Blue Goose Tavern – Etobicoke</li>
                        <li>Shakers Smokehouse BBQ and Sports Bar – Oakville</li>
                        <li>Etobicoke Local – Toronto</li>
                        <li>The Schwaben Club – Kitchener</li>
                        <li>Welland Rib Fest – Welland</li>
                        <li>Milton Boom Fest – Milton</li>
                        <li>The Tennessee – Toronto</li>
                        <li>Hamilton Bulldogs Concert Series – Hamilton</li>
                        <li>Neuro-Palooza 4 – Bay City Music Hall – Hamilton</li>
                        <li>Christine’s Charity Toy Drive – Mississauga</li>
                        <li>Grundfos Corporate Christmas Party – Mississauga</li>
                    </ul>
                </section>
                <hr className="bg-white"/>
                <section className="container text-center py-5 my-5">
                    <h2>Contact us:</h2>
                    <p>Email: almostfamousgta@gmail.com</p>
                    <p>Twitter:  @almostfamousgta</p>
                </section>
                <hr className="bg-white"/>
            </Layout>
        </>
    )
}

export default About