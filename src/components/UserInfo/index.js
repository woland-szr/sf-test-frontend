import React from 'react';
import './index.css';

const UserInfo = ({ userData }) => {

    return (
    <div className='userinfo'>
        <div className='userinfo__logo'>
            <img src='./userpic.png' alt=''></img>
        </div>
    <div className='userinfo__name'>{userData.userName}</div>
        <div className='userinfo__prof'>{userData.userProf}</div>
        <div className='userinfo__infoblock'>
            <div className='userinfo__infoblock-info'>
                <span className='info__amount'>{userData.answers}</span>
                <br />
                <span className='info__name'>отклики</span>
            </div>
            <div className='divider'></div>
            <div className='userinfo__infoblock-info'>
                <span className='info__amount'>{userData.views}</span>
                <br />
                <span className='info__name'>просмотры</span>
            </div>
        </div>
        <button className='userinfo_btn'>Редактировать профиль</button>
    </div>
    )
}

export default UserInfo
