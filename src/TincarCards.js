import React, {useState} from "react";
import TinderCard from "react-tinder-card"
import "./TincarCards.css";
import CardFooter from "./CardFooter"

function TincarCards() {

    const [cars] = useState([
        {
        name: "La Ferrari",
        url: "https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cHM6Ly9jZG4uZGVhbGVyYWNjZWxlcmF0ZS5jb20vZnVzaW9uLzEvNjQ2LzI2NDg3Lzc5MHgxMDI0LzIwMTQtZmVycmFyaS1sYWZlcnJhcmktMmRyLWNwZQ&hmac=op-GqksUffI"
        },
        {
        name: "Pagani Huyra",
        url: "https://images.hgmsites.net/lrg/pagani-huayra-lultimo--image-via-prestige-imports-miami_100664356_l.jpg"
        }
    ]);

    function whenSwiped(direction, carName) {
        console.log("swiped on:" + carName);
    }

    const outOfWindow = (carName) => {
            console.log(carName + "is gonzo");
    }

    return (
        <div className="tincarCards">
            <div className="tincarCards__cardContainer">
            {cars.map((car) => (
                <TinderCard 
                className="swipe"
                key={car.name}
                preventSwipe={["up", "down"]}
                onSwipe={(direction) => whenSwiped(direction, car.name)}
                onCardLeftScreen={() => outOfWindow( car.name)}
                >
                    <div
                    style={{backgroundImage: "url(" + car.url + ")"}}
                    className="cards"
                    >
                    <h2>{car.name}</h2>
                    </div>
                </TinderCard>
            ))}
            <CardFooter/>
            </div>
        </div>
    )
}

export default TincarCards
