export default function DarkestLight(){
    return (
        <main>
            <div className="flex-row">
                <section aria-label="Cover image">
                    <img src="/DL-2ed-cover(medium).jpg" className="img-shadow" alt="Cover of Darkest Light by Bethany Helwig" />
                </section>
                <section>
                    <h1>Darkest Light</h1>
                    <h3 className="subtitle">Book #1, Age of Aspects</h3>
                    <div className="purchase-links">
                        <a href="https://www.amazon.com/Darkest-Light-Age-Aspects-1/dp/150102079X/ref=sr_1_1?s=books&ie=UTF8&qid=1418845663&sr=1-1" 
                            target="_blank" rel="noopener noreferrer"
                            aria-label="Buy on Amazon (opens in a new tab)"
                            >Amazon</a>
                    </div>
                    <p style={{textAlign: "center"}}>Add it to your shelf on <a href="https://www.goodreads.com/book/show/23866151-darkest-light" target="_blank" rel="noopener noreferrer" aria-label="Add on Goodreads (opens in a new tab)">Goodreads</a>.</p>

                    <p>Samus Keegan is a soldier in a war against an unimaginably powerful being, 
                        an elemental phoenix that was once one of five guardians of the world. 
                        After being taken prisoner, escape is a fleeting dream until rescue arrives 
                        in the form of Tessa Faust, a paladin warrior blessed with the powers of 
                        the earth aspect. But when Samus returns home, his world is turned upside 
                        down yet again when he discovers his wife and child are dead.</p>
                    <p>Unable to move forward, he drowns his grief in ale as visions of his wife 
                        come to haunt him. He struggles on as a mercenary until Tessa returns to 
                        persuade him to fight in a new war against an old enemy. When the first 
                        battle goes horribly awry, Samus finds himself on the run with Tessa and 
                        together they uncover a conspiracy that stretches far beyond the war itself. 
                        The answer to unraveling it lies in Samus’s past but unearthing the truth 
                        might kill him in the process.</p>
                    <h3>Extras:</h3>
                    <div className="extras-list">
                        <ul>
                            <li>
                                <a href="https://pin.it/1TEg4qSNk" 
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label="View Pinterest board (opens in a new tab)"
                                    >Pinterest Inspiration Board</a>
                            </li>
                            <li>
                                <a href="https://open.spotify.com/playlist/6ocZS2r2A0XEMCxijQM7RI?si=b7513317376e47bb" 
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label="Spotify playlist (opens in a new tab)"
                                    >Spotify Book Playlist</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}