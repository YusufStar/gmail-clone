import React from 'react'
import './css/emaillist.css'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

function EmailType() {
  return (
    <div className='emailtype'>
        <div className="emailtype__options emailtype__options--active">
            <InboxIcon />
            <p>Primary</p>
        </div>
        <div className="emailtype__options">
            <PeopleIcon />
            <p>Social</p>
        </div>
        <div className="emailtype__options">
            <LocalOfferIcon />
            <p>Promotions</p>
        </div>
    </div>
  )
}

export default EmailType