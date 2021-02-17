import React from 'react'
import HeatMapReact from 'react-heatmap-grid'

interface Props {

}

export default function HeatMap(props: Props) {
  const arr = Array.from({ length: 5 }).map(_ => Array.from({ length: 5 }).map(_ => Math.floor(Math.random() * Math.floor(10))))
  console.log(arr)
  const xl = Array.from({ length: 5 }).fill('').map((_, i) => 'x'+i)
  const yl = Array.from({ length: 5 }).fill('').map((_, i) => 'y'+i)

  const onClick = React.useCallback(() => {
    window.ym(72603163,'reachGoal','oncellclick')
  }, [])

  return (
    <div><HeatMapReact onClick={onClick} data={arr} xLabels={xl} yLabels={yl} squares height={45} cellStyle={(background, value, min, max, data, x, y) => ({
      background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
      fontSize: "11.5px",
      color: "#444444"
    })}
    cellRender={value => {
      return value && <div>{value}</div>
    }}>

    </HeatMapReact></div>
  )
}