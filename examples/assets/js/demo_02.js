( () => {

  /***
   * Reference:
   * https://css-tricks.com/introduction-web-audio-api/
   * 
   * 1. Create audio context
   * 2. Create source
   * 3. Connect filter nodes
   * 4. Connect to destination
   */

  let context = new (window.AudioContext || window.webkitAudioContext)()
  let oscillator = context.createOscillator()

  oscillator.type = 'sine'
  oscillator.frequency.value = 440

  let gain = context.createGain()
  oscillator.connect( gain )
  gain.connect( context.destination )

  let now = context.currentTime
  gain.gain.setValueAtTime(1, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)
  oscillator.start(now)
  oscillator.stop(now + 0.5)


})()