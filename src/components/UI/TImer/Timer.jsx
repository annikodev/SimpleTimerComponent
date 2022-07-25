import React, {useEffect, useState} from 'react';
import styles from './Timer.module.scss'
import TimerHead from "./Timer.head";
import TimerBody from "./Timer.body";
import TimerSetting from "./Timer.setting";
import Modale from "../modale/modale";

const Timer = () => {
    const [settingshow, setShow] = useState(false)
    const [modal, setModal] = useState(false)
    const ChangeModalVisible = () => {setModal(!modal)}
    const [dataList, setDateList] = useState([
            {id:1, eventName: 'New Year', eventDate:'2023-01-01', eventTime:'07:33', showing:true },
            {id:2, eventName: 'My birthday', eventDate:'2023-05-19', eventTime:'07:33', showing: false},
            {id:3, eventName: 'Starting school', eventDate:'2017-05-19', eventTime:'07:33', showing: false},
    ])
    const [showingArr, setShowingArr] = useState('')
    useEffect(()=>{
        setShowingArr(dataList.length>0?dataList.filter(el=>el.showing===true)[0]:{id:1, eventName: 'New Year', eventDate:'2023-01-11', eventTime:'07:33', showing: false})
    },[dataList])

    const addNewEvent = (newEvent)=> {
        setDateList([...dataList, newEvent])
    }
    const deleteEvent = (evID)=>{
        setDateList(dataList.filter(el=> el.id!==evID))
    }


    return (
        <div className={styles.timer__content}>
            <Modale visible={modal} setVisible={ChangeModalVisible} addNew={addNewEvent}/>
            <TimerHead/>

            {settingshow
                ?
                <TimerSetting
                    deleteElement={deleteEvent}
                    list={dataList}
                    setmodal={ChangeModalVisible}
                />
                :
                <TimerBody list={showingArr}/>
            }


            <div className={styles.timer__button} onClick={()=> setShow(!settingshow)}>
                <span>Setting's</span>
            </div>
        </div>
    );
};

export default Timer;