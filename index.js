module.exports = function(bp) {
  bp.middlewares.load()

  /* Things to do:
    [ ] Answering to hello world
    [ ] Answering to any other message
  */
  
  // Initial response
  bp.hear(/hello|hey|hi|allo|salut|bonjour/i, (event, next) => {
    event.reply('#welcome') 
  })

  // You can also pass a matcher object to better filter events
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

  //survey submit
  // bp.hear({ 
  //   type: 'form', 
  //   formId: "menu",
    
  // }, (event, next) => {
      
  // });


  // Quick menu options
  // bp.hear({
  //   type: /message|text/i,
  //   text: /rating|rate|excellent/i
  // }, (event, next) => {
  //   event.reply('#textWithQuickReplies')
  // })

  // Not working
  // bp.hear('TEXTWITHQUICKREPLIES.B1', (event, next) => {
  //   event.reply('#textWithQuickReplies_reply', { button: 'Borrow clothes as a stylist' })
  // })

  // bp.hear('TEXTWITHQUICKREPLIES.B2', (event, next) => {
  //   event.reply('#textWithQuickReplies_reply', { 
  //     button: 'Have clothes to give', 
  //     answer: 'Sorry we do not accept clothing donations'
  //   })
  // })
  
}
