import React from 'react';
import styles from './Timer.setting.module.scss'
import {Checkbox, IconButton, Radio, RadioGroup} from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import TimerBlock from "./Timer.block";

const TimerSetting = ({setmodal, list, deleteElement, selectEvent}) => {

    return (
        <div className={styles.timer__setting}>
            <div className={styles.timer__list}>
                <RadioGroup defaultValue={list.filter(el=> el.showing==true)[0].id}>
                    {list.map((item)=>
                        <TimerBlock
                            selectEvent={selectEvent}
                            deleteElement={deleteElement}
                            key={item.id}
                            index={item.id}
                            name={item.eventName}
                            time={item.eventTime}
                            date={item.eventDate}
                        />
                    )}


                </RadioGroup>
            </div>

            <div
                onClick={()=>setmodal()}
                className={styles.timer__addbtn}>
                <span>Add New</span>
            </div>
        </div>
    );
};

export default TimerSetting;