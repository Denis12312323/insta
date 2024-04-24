import React from "react";
import './style.css'
import cn from "classnames";
import { useDispatch } from "react-redux";
import { toggleLike } from "../../redux/actions/photos";


const Card = ({ imgUrl, className, likes, comments, isLikedByYou, onLikeClick }) => {



    return (
        <div className={cn('cnCardRoot', className)}>
            <img src={imgUrl} alt="image" className="CardImage" />
            <div className="CardHover"></div>
            <div className="CardIcons">
                <i className={cn(`${isLikedByYou ? "fas" : 'far'} fa-heart`, 'CardIcon')} onClick={onLikeClick}/>
                <span className="CardNumber CardLikes">{likes}</span>
                <i className={cn("fas fa-comment", 'CardIcon')} />
                <span className="CardNumber">{comments}</span>
            </div>
        </div>
    )
}


export default Card