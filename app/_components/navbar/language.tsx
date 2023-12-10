'use client'
import * as React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from './box'

export default function Language() {
    const [value, setValue] = React.useState('english');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <Box positionArrow="left-[60%]" positionBox="left-[unset] translate-x-[unset] -right-[30px]">
            <div className="w-[180px] p-3">
                <FormControl>
                    <span className='text-[#545454] text-[12px]'>Select Language</span>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel sx={{ color: '#545454' }} value="english" control={<Radio sx={{ color: 'transparent' }} size='small' />} label="EN / English" />
                        <FormControlLabel sx={{ color: '#545454' }} value="nepali" control={<Radio sx={{ color: 'transparent' }} size='small' />} label="NE / Nepali" />
                    </RadioGroup>
                </FormControl>
            </div>
        </Box>
    )
}
