import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

const ChallengeTemplate = (props) => {
  const { fm, body } = props;
  return (
    <>
      { fm && fm.title && <h1>{fm.title}</h1> }
      { body &&
        <ReactMarkdown
          source={body}
          escapeHtml={false}
        />
      }
    </>
  );
}

export default ChallengeTemplate;