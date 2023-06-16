import React from 'react';

interface Props {
  onClick: () => void;
  text: string;
  className?: string;
}

export function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}
