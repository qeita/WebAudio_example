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

  const BASE_FREQUENCY = 440
  let baseLine = parseInt(window.innerHeight, 10) / 2
  let isStop = false

  oscillator.type = 'sine'
  oscillator.frequency.value = BASE_FREQUENCY

  let gain = context.createGain()
  oscillator.connect( gain )
  gain.connect( context.destination )  
  oscillator.start()

  /**
   * Event
   */
  window.addEventListener('click', function(){
    if(isStop){
      gain.gain.value = 1
    }else{
      // ミュート
      gain.gain.value = 0
    }
    isStop = !isStop
  }, false)

  window.addEventListener('resize', function(){
    baseLine = parseInt(window.innerHeight, 10) / 2
  }, false)

  window.addEventListener('mousemove', function(e){
    changeFrequency(e)
  }, false)


  function changeFrequency(ev){
    var _x = ev.pageX
    var _y = ev.pageY

    var _diff = _y - baseLine
    oscillator.frequency.value = BASE_FREQUENCY + _diff

  }


})()