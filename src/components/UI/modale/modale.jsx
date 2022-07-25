import React, {useEffect, useRef, useState} from 'react';
import styles from "./modale.module.scss";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

const Modale = ({visible, setVisible, addNew}) => {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const mainclass = [styles.modale]
    if (visible) {
        mainclass.push(styles.active)
    }

    const [eventValue, setEventValue] = useState(
        {
            id:Date.now(),
            eventName: '',
            eventDate: '',
            eventTime: '',
            showing: false,
        })

    const clearInputs = ()=>{
        setEventValue(
            {
                id:Date.now(),
                eventName: '',
                eventDate: '',
                eventTime: '',
                showing: false,
            })
    }

    return (
        <div className={mainclass.join(' ')}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <TextField
                    onChange={(e)=>setEventValue({...eventValue, eventDate: e.target.value})}
                    id="date"
                    label="You'r date"
                    value={eventValue.eventDate}
                    type="date"
                    sx={{ width: 220, marginBottom: 2, cursor: 'pointer'}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={(e)=>setEventValue({...eventValue, eventTime: e.target.value})}
                    id="time"
                    value={eventValue.eventTime}

                    label="You'r time"
                    type="time"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300,
                    }}
                    sx={{ width: 220, marginBottom: 2}}
                />
            </div>

            <FormControl>
                <InputLabel htmlFor="component-outlined">You'r event</InputLabel>
                <OutlinedInput
                    value={eventValue.eventName}
                    onChange={(e)=> setEventValue({...eventValue, eventName: e.target.value})}
                    id="component-outlined"
                    label="You'r event"
                />
            </FormControl>

            <div
                onClick={()=> {
                    addNew(eventValue)
                    clearInputs()
                    setVisible()
                }}
                className={styles.savebtn}>
                Save
            </div>
            <div
                onClick={()=>setVisible()}
                className={styles.savebtn}>
                Close
            </div>
        </div>
    );
};

export default Modale;