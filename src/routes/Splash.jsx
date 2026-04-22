import React from "react";

export default function Splash(){
    return (
        <main>
            <h1>Author. Gamer. Geek.</h1>
            <div className="flex-row">
                <div>
                    <h2>The Lone Hunter</h2>
                    <h3>Available now!</h3>
                    <p>Wounded and left behind by his team, Charlie Jaeger waits restless 
                        in the hospital for news of his friends. But he’s not safe for long. 
                        The new breed of shapeshifters, memory-stealing mimics, target Charlie 
                        when he receives a warning that threatens to expose them. Not knowing 
                        who to trust, he must rely only on his himself if he’s to find a way 
                        to survive and rescue his team.</p>
                    <p>On the run from friends and foes alike, he makes an unexpected ally 
                        when a mysterious dragon comes to his rescue. Forced to team up, 
                        they formulate a dangerous plan, the cost of which could be their lives. 
                        With the odds against them, one misstep will mean the end of the IMS 
                        as they know it. And if the IMS falls, then so does the world.</p>
                    <div className="purchase-links">
                        <a href="https://www.amazon.com/dp/1946639141?ref_=pe_3052080_397514860" 
                            target="_blank" rel="noopener noreferrer" 
                            aria-label="Buy on Amazon (opens in a new tab)"
                            >Amazon</a> | 
                        <a href="https://www.barnesandnoble.com/w/the-lone-hunter-bethany-helwig/1132529217;jsessionid=F42B5BA84EFB309FDF30CCD2853F4505.prodny_store01-atgap08?ean=9781946639141" 
                            target="_blank" rel="noopener noreferrer"
                            aria-label="Buy on Barnes & Noble (opens in a new tab)"
                            > Barnes & Noble</a> | 
                        <a href="https://www.kobo.com/us/en/ebook/the-lone-hunter-1" 
                            target="_blank" rel="noopener noreferrer" 
                            aria-label="Buy on Kobo (opens in a new tab)"
                            > Kobo</a> |
                        <a href="https://www.booksamillion.com/p/Lone-Hunter/Bethany-Helwig/9781946639141?id=7794477851948" 
                            target="_blank" rel="noopener noreferrer" 
                            aria-label="Buy on Books-A-Million (opens in a new tab)"
                            > Books-A-Million</a> |
                        <a href="https://bookshop.org/p/books/the-lone-hunter-bethany-helwig/c6e8cc27c6783a77?ean=9781946639141&next=t&next=t&source=IndieBound&ref=https%3A%2F%2Fbethanyhelwig.com%2F" 
                            target="_blank" rel="noopener noreferrer" 
                            aria-label="Buy on IndieBound (opens in a new tab)"
                            > IndieBound</a>
                    </div>
                </div>
                <img className="img-shadow" src="TLH-cover-bookpage.jpg" alt="Cover of The Lone Hunter" />
            </div>
        </main>
    )
}