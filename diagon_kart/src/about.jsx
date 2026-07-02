//about
import './about.css';

export function About(){
    return(
        <div className="about-cnt">
            <h1>Behind the Magic</h1>
            <h3>"Every project starts with an idea."</h3>
            <p className="divider-symbol">✦</p>
            <h1>Why I Built This</h1>
            <h2>As a lifelong Harry Potter fan and an aspiring web developer, I wanted to create something that felt magical rather than ordinary. Diagon Kart is my interpretation of what an online wizarding marketplace could look like.</h2>
            <p className="divider-symbol">✦</p>
            <h1>The Goal</h1>
            <h2>Rather than recreating a traditional online store, I wanted to design an experience that captured the atmosphere of Diagon Alley while applying real-world frontend concepts like reusable components, routing, state management, and responsive design.</h2>
            <h2>Every page, interaction, and detail in this project is part of that journey.</h2>
            <p className ="ending">
                    Thank you for stepping into my version of Diagon Alley.
            </p>
        </div>
    );
}