import React from 'react'
// @ts-ignore
import {Container, CellData} from './HeatMap/Contatiner'

interface Props {

}

export default function HeatMap(props: Props) {

  const [data, setData] = React.useState<CellData[][]>([])

  const onClick = React.useCallback(() => {
    // @ts-ignore
    window.ym(72603163,'reachGoal','oncellclick')
  }, [])

  const getData = React.useCallback(async () => {
    let arr
    const res = await fetch('/api/heatMap')
    arr = await res.json()
    setData(arr)
  }, [])

  React.useEffect(() => {
    getData()
  }, [getData])

  return data.length && (
    <Container
      backgroundColor={() => ({
        red: 0,
        green: 255,
        blue: 155,
      })}
      data={() => data}
      onClick={() => {
        onClick()
      }}
      intervalSpace={2}>

    </Container>
  )
}