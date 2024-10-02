import React, { useState } from 'react';

function CopyCodeBlock({ code, isTerminal = false }) {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        }, (err) => {
            console.error("Copy failed!" + err)
        });
    };

    const formatCode = (code, isTerminal) => {
        return code.split('\n').map((line, index) => (
            <div key={index}>
                {isTerminal && <span className="dollar">$ </span>}
                <span>{line}</span>
            </div>
        ));
    };

    return (
        <div className="code-block">
            <pre>
                <code className="code">
                    {formatCode(code, isTerminal)}
                </code>
            </pre>
            <button
                onClick={copyToClipboard}
                className={`copy-button ${copySuccess ? "copied" : ""}`}
            >
                {copySuccess ? (
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <rect x="9" y="2" width="6" height="4" rx="1" ry="1" />
                        <path d="M19 5h-4a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2H5v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" />
                        <path d="m9 14l2 2 4-4" />
                    </svg>
                ) : (
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <rect x="9" y="2" width="6" height="4" rx="1" ry="1" />
                        <path d="M19 5h-4a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2H5v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" />
                    </svg>
                )}
            </button>
        </div>
    );
}

export default CopyCodeBlock;