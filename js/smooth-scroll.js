document.addEventListener("DOMContentLoaded", () => {
    const scrollLinks = document.querySelectorAll(".nav-links a")
    const viewportHeight = window.innerHeight
  
    scrollLinks.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
  
        let targetScrollPosition
        switch (index) {
          case 0: // Inicio
            targetScrollPosition = 0
            break
          case 1: // Proyectos
            targetScrollPosition = viewportHeight + viewportHeight * 1 + viewportHeight * 2.6
            break
          case 2: // Horizontes
            targetScrollPosition = document.documentElement.scrollHeight - viewportHeight * 1.85
            break
          case 3: // Contact
            targetScrollPosition = document.documentElement.scrollHeight - viewportHeight
            break
          default:
            targetScrollPosition = 0
        }
  
        smoothScrollTo(targetScrollPosition, 1000)
      })
    })
  
    function smoothScrollTo(targetPosition, duration) {
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      let startTime = null
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }
  
      function ease(t, b, c, d) {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t * t + b
        t -= 2
        return (c / 2) * (t * t * t + 2) + b
      }
  
      requestAnimationFrame(animation)
    }
  })
  
  