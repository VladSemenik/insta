// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const heatMap = Array.from({ length: 5 }).map((_, y, rows) => Array.from({ length: 5 }).map((_, x, row) => {
    if (x > y)
      return ({
        title: '-',
        opacity: 0
      })
    const coof = Math.floor(Math.random() * Math.floor(10)) / 10
    return ({
      title: 100 * coof + ' %',
      opacity: coof
    })
  }))
  res.status(200).json(heatMap)
}
