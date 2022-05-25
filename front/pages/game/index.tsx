import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameTemplate from '../../components/game/main/gameMain';
import Ranking from '../ranking';
import Setting from '../setting';
import Market from '../market';

interface infoType {
    info: {
        userid: string;
        nickname: string;
        stage: number;
        gold: number;
        exp: number;
    };
}

const Game = () => {
    const dispatch = useDispatch();
    const info = useSelector((state: infoType) => state.info);

    const [ranking, setRanking] = useState(false);
    const [setting, setSetting] = useState(false);

    const openRanking = () => {
        setRanking(true);
    };

    const closeRanking = () => {
        setRanking(false);
    };

    const openSetting = () => {
        setSetting(true);
    };

    const closeSetting = () => {
        setSetting(false);
    };

    useEffect(() => {
        dispatch({ type: 'INFO_REQUEST' });
    }, []);

    return (
        <GameTemplate>
            <div className="header">
                <div className="header_left">
                    <div className="user">
                        <div className="user_wrap">
                            <div className="user_image"></div>
                            <div className="user_info">
                                <p className="user_name">{info.userid} </p>
                                <p className="user_gold">{info.gold}</p>
                            </div>
                        </div>
                        <div className="user_progress">
                            <div className="user_exp">
                                <div>exp</div>
                                <progress
                                    className="exp_progress"
                                    value={info.exp}
                                    max="100"
                                ></progress>
                            </div>
                        </div>
                    </div>
                    <div className="stage">
                        stage
                        <div>{info.stage}</div>
                    </div>
                </div>
                <div className="header_right">
                    <div className="service">
                        <div className="ranking" onClick={openRanking}>
                            <img src="./loading.gif" />
                        </div>
                        <div className="setting" onClick={openSetting}>
                            <img src="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="background">
                    <div className="user_gauge">
                        <div>피로도</div>
                        <div>
                            <progress
                                className="gauge_progress"
                                value="50"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                    <div className="main">
                        <div className="user_chair_desk">
                            <img src="loading.gif" />
                        </div>
                        <div className="pet_cat">
                            <img src="loading.gif" />
                        </div>
                        <div className="pet_dog">
                            <img src="loading.gif" />
                        </div>
                        <div className="pet_bird">
                            <img src="loading.gif" />
                        </div>
                        <div className="pet_fish">
                            <img src="loading.gif" />
                        </div>
                        <div className="cheer">
                            <img src="loading.gif" />
                        </div>
                        <div className="cook">
                            <img src="loading.gif" />
                        </div>
                        <div className="homekeeper">
                            <img src="loading.gif" />
                        </div>
                        <div className="vehicle">
                            <img src="loading.gif" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="stat">
                    <img src="./설정.jpg" />
                </div>
                <div className="auto_gold">
                    <img src="./설정.jpg" />
                </div>
                <div className="auto_exp">
                    <img src="./설정.jpg" />
                </div>
            </div>
            {ranking ? <Ranking closeRanking={closeRanking} /> : null}
            {setting ? <Setting closeSetting={closeSetting} /> : null}
            <Market />
        </GameTemplate>
    );
};

export default Game;
