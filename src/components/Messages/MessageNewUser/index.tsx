import React, { useState } from 'react'
import { MessageNewUserComponent } from '../../../stories/Message/MessageNewUser.stories'


export const CreateMessage = () => {
    const [showMsg, setshowMsg] = useState(true)
    return (
        <>
            {
                showMsg ?
                    <div>
                        <MessageNewUserComponent onClick={showMsg => setshowMsg(!showMsg)} />
                    </div> :
                    null
            }
        </>
    )
}