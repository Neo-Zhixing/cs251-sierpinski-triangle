const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.height = document.body.clientHeight
canvas.width = document.body.clientWidth

const points = []

let p = [100, 100]

function click(event) {
  points.push([event.offsetX, event.offsetY])
  ctx.beginPath()
  ctx.arc(event.offsetX, event.offsetY, 5, 0, Math.PI * 2, true)
  ctx.fill()
  if (points.length >= 3) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.removeEventListener('click', click)
    drawTriangle()
    setInterval(iterate, 3)
  }
}

canvas.addEventListener('click', click)

function drawTriangle() {
  ctx.beginPath()
  ctx.lineWidth = "2"
  ctx.strokeStyle = "green"
  ctx.moveTo(points[0][0], points[0][1])
  ctx.lineTo(points[1][0], points[1][1])
  ctx.lineTo(points[2][0], points[2][1])
  ctx.closePath()
  ctx.stroke()
}

function iterate() {
  const point = points[Math.floor(Math.random() * 3)]
  const midpoint = [(p[0] + point[0]) / 2, (p[1] + point[1]) / 2]
  p = midpoint
  ctx.beginPath()
  ctx.arc(p[0], p[1], 2, 0, Math.PI * 2, true)
  ctx.fill()
}

