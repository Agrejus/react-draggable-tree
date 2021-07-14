import React = require('react')
import * as classNames from 'classnames'

export interface TogglerProps {
  collapsed: boolean
  onClick: (ev: React.MouseEvent<Element>) => void
}

export function Toggler (props: TogglerProps) {
  const claassName = classNames('ReactDraggableTree_toggler', {
    'ReactDraggableTree_toggler-collapsed': props.collapsed
  })
  return <div className={claassName} onClick={props.onClick}/>
}
