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
    const arrJSON = JSON.parse(localStorage.getItem('list'))
    const [dataList, setDateList] = useState(arrJSON?arrJSON:[{id:1, eventName: 'New Year', eventDate:'2023-01-01', eventTime:'07:33', showing:true },])
    const [showingArr, setShowingArr] = useState(dataList.length>0?dataList.filter(el=>el.showing===true)[0]:{id:1, eventName: 'New Year', eventDate:'2223-01-01', eventTime:'07:33', showing:true })
    useEffect(()=>{
        setShowingArr(dataList.filter(el=>el.showing===true)[0])
    },[dataList])

    const addNewEvent = (newEvent)=> {
        setDateList([...dataList, newEvent])
        localStorage.setItem('list',JSON.stringify([...dataList, newEvent]))
    }
    const deleteEvent = (evID)=>{
        if (dataList.filter(el=>el.id==evID)[0].showing===true){
            console.log('это так не сработает')
        }else {
            localStorage.setItem('list', JSON.stringify(dataList.filter(el=> el.id!==evID)))
            setDateList(dataList.filter(el=> el.id!==evID))
        }
    }
    const selectEvent = (evID) => {
        setDateList(dataList.map(el=>el.showing===true?{...el, showing: false}:{...el}).map(el=>el.id==evID?{...el, showing: true}:{...el}))
    }


    return (
        <div className={styles.timer__content}>
            <Modale visible={modal} setVisible={ChangeModalVisible} addNew={addNewEvent}/>
            <TimerHead/>

            {settingshow
                ?
                <TimerSetting
                    selectEvent={selectEvent}
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