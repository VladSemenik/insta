import React from 'react'
import container from './container.module.css'
import {Cell, Props as CellProps} from './Cell'

export interface CellData {
  title: string
  opacity: number
}

export interface PropsDataSourceBridge {
  data: () => Array<Array<CellData>>
  backgroundColor: () => ({
    red: number
    green: number
    blue: number
  })
  intervalSpace: number
}

export interface Props {
  onClick(x, y): void
}

export const Container: React.FC<Props & PropsDataSourceBridge> = (props) => {

  const {red, green, blue} = React.useMemo(() => props.backgroundColor(), [props.backgroundColor])

  const onCellClick = React.useCallback<CellProps['onClick']>((x, y) => {
    props.onClick(x, y)
  }, [props.onClick])

  return (
    <div className={container.container}>
      {
        props.data().map((coll, x, rowArr) =>
          coll.map((value, y) => {
            const height = `calc(${100/rowArr.length}% - ${(rowArr.length-1)/rowArr.length*props.intervalSpace}px)`
            return <Cell
              x={x}
              y={y}
              height={height}
              width={height}
              cellBackgroundColor={() => `rgba(${red}, ${green}, ${blue}, ${value.opacity})`}
              onClick={onCellClick}
              key={`${x}_${y}`}
             >
              {value.title}
            </Cell>
          })
        )
      }
    </div>
  )
}