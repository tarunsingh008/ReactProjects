import React, { useState } from 'react';
// import 'emoji-mart/css/emoji-mart.css'; // Import the library's CSS
import { Picker } from 'emoji-mart';

function ChatInput() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleEmojiSelect = (emoji) => {
    setChosenEmoji(emoji);
    // Do something with the selected emoji, like adding it to your chat input
  };

  return (
    <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.native}</span>
      ) : (
        <Picker onSelect={handleEmojiSelect} />
      )}
    </div>
  );
}

export default ChatInput;
