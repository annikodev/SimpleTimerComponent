import React from 'react';
import styles from "./Timer.setting.module.scss";
import {IconButton, Radio} from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const TimerBlock = ({name, date, time, index, deleteElement}) => {
    return (
        <div className={styles.timer__block}>
            <Radio value={index} color={"default"}/>
            <div className={styles.timer__info}>
                <span>{name}</span>
                <div>
                    <span>{date} {time}</span>
                    <IconButton onClick={()=>deleteElement(index)}>
                        <RemoveCircleOutlineOutlinedIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default TimerBlock;