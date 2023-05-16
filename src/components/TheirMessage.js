import React from 'react';

const TheirMessage = ({lastMessage, message}) => {
 
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.userName;


    return (
      <div className='message-row'>
        {isFirstMessageByUser && (
            <div 
            className='message-avatar'
            style={{backgroundImage: message.sender && `url(${message.sender.avatar})`
        }}
            />
        )}

        {message.attachments && message.attachments.lenght > 0 ?
        (<img 
                src={message.attachement[0].file}
                alt='message-attachement' 
                className='message-image' 
                style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
            />)
            :
            <div className='message'
                style={{float: 'left', backgroundColor: '#CABCBC', marginLeft: isFirstMessageByUser ? '4px' : "48px" }}>
                {message.text}
            </div>
    }
      </div>
    )
}

export default TheirMessage;