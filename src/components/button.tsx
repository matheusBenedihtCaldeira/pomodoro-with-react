import React from 'react';

interface Props {
  onClick: () => void;
  text: string;
}

export function Button(props: Props): JSX.Element {
  return <button onClick={props.onClick}>{props.text}</button>;
}
