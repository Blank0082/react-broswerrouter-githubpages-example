import React, { useState } from 'react';

function CopyCodeBlock({ code, isTerminal = false }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      setTimeout(() => { setCopySuccess(false); }, 2000);
    }, (err) => {
      console.error('複製失敗！', err);
    });
  };

  return (
    <div className="code-block">
      <pre>
        <code className="code">
          {isTerminal ? (
            <>
              <span className="dollar">$</span>{formatCodeWithColors(code)}
            </>
          ) : (
            code
          )}
        </code>
      </pre>
      <span className={`copy-success ${copySuccess ? 'show' : ''}`}>
        Copied!
      </span>
      <button
        onClick={copyToClipboard}
        className={`copy-button ${copySuccess ? 'show' : 'fade-out'}`}
      >
        複製
      </button>
    </div>
  );
}

const formatCodeWithColors = (code) => {
  return code.split(/(\s+)/).map((word, index) => {
    if (word === '$') {
      return <span key={`dollar-${index}`} className="dollar">{word}</span>;
    } else {
      return <span key={`default-${index}`}>{word}</span>;
    }
  });
};

export default CopyCodeBlock;