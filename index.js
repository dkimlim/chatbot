module.exports = function(bp) {
  bp.middlewares.load()
  
  // Welcome response initialized by user
  bp.hear(/hello|hey|hi|allo|salut|bonjour/i, (event, next) => {
    event.reply('#welcome') 
  })

  // Goodbye handler
  bp.hear({
    type: /message|text/i,
    text: /exit|bye|goodbye|quit|done|leave|stop/i
  }, (event, next) => {
    event.reply('#goodbye', {
      // You can pass data to the UMM bloc!
      reason: 'unknown'
    })
  })

  // Menu options
  bp.hear({
    type: /message|text/i,
    text: /menu|start|option|options|form/i
  }, (event, next) => {
    event.reply('#menu') 
  })

  // Menu answers
  bp.hear(/Product/, (event, next) => {
    event.reply('#product') 
  })

  bp.hear(/Donate/, (event, next) => {
    event.reply('#donate') 
  })

  bp.hear(/Stylist/, (event, next) => {
    event.reply('#stylist') 
  })

  bp.hear(/Location/, (event, next) => {
    event.reply('#location') 
  })

  bp.hear(/Other/, (event, next) => {
    event.reply('#other') 
  })
  
}
