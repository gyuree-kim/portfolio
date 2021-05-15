import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => {
  return (
      <ReactTypingEffect
        text={["Hi, this is Gyuri", "still dreaming of a better world"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        speed="100"
        eraseSpeed="100"
        eraseDelay="2000"
        typingDelay="2000"
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
  );
};

export default TypingEffect;