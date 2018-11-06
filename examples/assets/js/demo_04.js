(() => {
  /**
   * https://css-tricks.com/introduction-web-audio-api/
   */

  const btn = document.querySelector('.btn')
  let context
  let oscillator
  let isAudioOn = false

  btn.addEventListener('click', () => {
    isAudioOn = !isAudioOn
    if(isAudioOn){
      startSound()
    }else{
      stopSound()
      context = null
    }
  }, false)

  function startSound(){
    context = new (window.AudioContext || window.webkitAudioContext)()
    oscillator = context.createOscillator()
    oscillator.type = 'sine'
    oscillator.frequency.value = 440
    oscillator.connect(context.destination)
    oscillator.start()  
  }

  function stopSound(){
    oscillator.stop()
  }

})()