(() => {
  /**
   * https://css-tricks.com/introduction-web-audio-api/
   */

  const context = new (window.AudioContext || window.webkitAudioContext)()
  const btn = document.querySelector('.btn')

  class Sound{
    constructor(context){
      this.context = context
    }
    init(){
      this.oscillator = this.context.createOscillator()
      this.gainNode = this.context.createGain()
      this.distNode = this.context.createWaveShaper()

      this.oscillator.connect(this.gainNode)
      this.gainNode.connect(this.distNode)
      this.distNode.connect(this.context.destination)
      this.oscillator.type = 'sine'
      // this.oscillator.type = 'square'
      // this.oscillator.type = 'triangle'
      // this.oscillator.type = 'sawtooth'
    }
    play(value, time, end = time){
      this.init()

      this.oscillator.frequency.value = value
      this.gainNode.gain.setValueAtTime(1, this.context.currentTime)
      this.oscillator.start(time)
      this.stop(end)
    }
    stop(time){
      this.oscillator.stop(time)
    }
  }

  btn.addEventListener('click', () => {
    let note = new Sound(context)
    let now = context.currentTime

    note.play(466.16, now, now + 1)               // A#
    note.play(554.37, now + 1, now + 1.5)         // C#
    note.play(830.61, now + 1.5, now + 2.5)       // G#

    note.play(739.99, now + 3, now + 4)           // F#
    note.play(554.37, now + 4, now + 4.5)         // C#
    note.play(493.88, now + 4.5, now + 5.5)       // B

    note.play(466.16, now + 6, now + 6.5)           // A#
    note.play(466.16, now + 6.7, now + 7)           // A#
    note.play(466.16, now + 7.2, now + 7.5)           // A#
    note.play(466.16, now + 7.7, now + 8)           // A#

    note.play(493.88, now + 8.2, now + 8.5)       // B
    note.play(554.37, now + 8.7, now + 9)         // C#
    note.play(622.25, now + 9.2, now + 10.7)       // D#
    note.play(554.37, now + 10.7, now + 12.2)         // C#


    note.play(466.16, now + 12.7, now + 13.7)      // A#
    note.play(554.37, now + 13.7, now + 14.2)      // C#
    note.play(830.61, now + 14.2, now + 15.2)      // G#

    note.play(739.99, now + 15.7, now + 16.7)           // F#
    note.play(554.37, now + 16.7, now + 17.2)         // C#
    note.play(493.88, now + 17.2, now + 18.2)       // B

    note.play(466.16, now + 18.7, now + 19.7)      // A#
    note.play(554.37, now + 19.7, now + 20)      // C#
    note.play(554.37, now + 20.2, now + 20.5)      // C#
    note.play(622.25, now + 20.5, now + 21)       // D#
    note.play(698.46, now + 21, now + 21.5)                    // F
    note.play(739.99, now + 21.5, now + 22.5)           // F#
    

  }, false)


})()