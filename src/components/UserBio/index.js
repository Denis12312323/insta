import UserCounter from '../UserCounter';
import './style.css'
import React from 'react'


const UserBio = ({ avatarUrl, nickname, subscribers, subscribed,firstName,lastName,description,url }) => {
    return (
        <div className='UserBioRoot'>
            <div>
                <img className='UserBioAvatar' src={avatarUrl} alt='avatar' />
            </div>
            <div className='UserBioInfo'>
                <div className='UserBioRow'>
                    <span className='UserBioNick'>{nickname}</span>
                </div>
                <div className='UserBioRow'>
                    <UserCounter count={5} text='Пубилкаций' className='UserBioCounter'/>
                    <UserCounter count={subscribers} text='Подписчиков' className='UserBioCounter'/>
                    <UserCounter count={subscribed} text='Подписок'/>
                </div>
                <div className='UserBioRow'>
                    <span className='UserBioName'>{firstName} {lastName}</span>
                </div>
                <div className='UserBioRow'>
                    <span >{description}</span>
                </div>
                <a href={url}>{url}</a>
            </div>
        </div>
    )
}


export default UserBio;
