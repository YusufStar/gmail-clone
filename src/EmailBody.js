import React from 'react';
import './css/emaillist.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelOutlineIcon from '@material-ui/icons/LabelOutlined';

function EmailBody() {
  return (
    <div className='emailbody'>
        <div className="emailbody__left">
            <CheckBoxOutlineBlankIcon />
            <StarBorderIcon />
            <LabelOutlineIcon />

            <h4>Mahabeer Singh</h4>
        </div>

        <div className="emailbody__middle">
            <div className="emailbody__middle__msg">
                <p><b>Suject</b> This is message body</p>
            </div>
        </div>

        <div className="emailbody__right">
            <p>02:30 PM</p>
        </div>
    </div>
  )
}

export default EmailBody