import React from 'react'
import styled from 'styled-components'
import cell from './cell.module.css'

export interface PropsBackgroundColorBridge {
  cellBackgroundColor: () => string
}

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  x: number
  y: number
  height: string
  width: string
  onClick: (x: number, y: number, event: React.MouseEvent<HTMLDivElement>) => void
}

export const Cell: React.FC<Props & PropsBackgroundColorBridge> = (props) => {

  const onCellClick = React.useCallback<React.HTMLAttributes<HTMLDivElement>['onClick']>((event) => {
    props.onClick(props.x, props.y, event)
  }, [props.onClick])

  const CellDiv = styled.div(() => ({
    backgroundColor: props.cellBackgroundColor(),
    height: props.height,
    width: props.width,
  }))

  return <CellDiv
    className={cell.cell}
    onClick={onCellClick}
  >
   {props.children}
  </CellDiv>
}