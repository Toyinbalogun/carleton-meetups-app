import classes from "./Card.module.css";

function Card(props) {
    return ( //holds content between <Card></Card> tag
        <div className={classes.card}> 
            {props.children}
        </div>
    );
}

export default Card;