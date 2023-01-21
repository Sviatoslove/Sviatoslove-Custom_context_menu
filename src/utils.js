export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function playRandomSound(context, waveforms) {
  if (context === null) {
    context = new AudioContext()
  }
  let oscillatorNode = context.createOscillator()
  let gainNode = context.createGain()

  oscillatorNode.type = waveforms[Math.floor(Math.random() * waveforms.length)]

  let frequency = random(100, 8000)
  oscillatorNode.frequency.value = frequency

  console.log(
    `Форма волны воспроизведения звука - ${oscillatorNode.type}, частота - ${frequency}Гц!`
  ) // для наглядности

  gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

  oscillatorNode.connect(gainNode)
  gainNode.connect(context.destination)
  oscillatorNode.start(0)
}
