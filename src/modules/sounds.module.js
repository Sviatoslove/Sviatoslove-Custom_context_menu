import { Module } from '../core/module'
import { random } from '../utils'

let context = null
let waveforms = ['sine', 'square', 'sawtooth', 'triangle']

export class SoundsModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    if (!context) {
      context = new AudioContext()
    }

    let oscillatorNode = context.createOscillator()
    let gainNode = context.createGain()

    oscillatorNode.type = waveforms[Math.floor(Math.random() * waveforms.length)]

    let frequency = random(100, 4000)
    oscillatorNode.frequency.value = frequency

    gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

    oscillatorNode.connect(gainNode)
    gainNode.connect(context.destination)
    oscillatorNode.start(0)
  }
}