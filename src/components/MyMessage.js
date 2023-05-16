import React from 'react';

const MyMessage = ({message}) => {

    if (message.attachements  && message.attachements.lenght > 0) {
        return (
            <img 
                src={message.attachement[0].file}
                alt='message-attachement' 
                className='message-mage' 
                style={{float: 'right'}}
            />
        );
    }

    return (
      <div className='message'
      style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: 'ActiveCaption' }}>
        {message.text}
      </div>
    )
}

export default MyMessage;
