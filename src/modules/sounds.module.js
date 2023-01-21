import { Module } from '../core/module'
import { playRandomSound } from '../utils'

export class SoundsModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    let context = null
    let waveforms = ['sine', 'square', 'sawtooth', 'triangle']
    playRandomSound(context, waveforms)
  }
}
