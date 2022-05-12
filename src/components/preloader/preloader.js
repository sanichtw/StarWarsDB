import React from 'react';
import preloader from '../../images/preloader/preloader.svg';
import style from './preloader.module.css';


const Preloader = () => {
    return <div className={style.preloader}>
        <img src={preloader}>
        </img>
    </div>
};

export default Preloader;
