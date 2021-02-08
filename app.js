gsap.registerPlugin(CSSRulePlugin);

        const tl = gsap.timeline({defaults: { ease: Power2.easeOut}})
              btn = document.querySelector('button')
              rule = CSSRulePlugin.getRule("button::before"); //get the rule

        tl.to('.label', {opacity: 0, position: 'absolute', height: 0, duration: '.2s'})
          .to('button', {borderRadius: '50%', width:'2.5em', height: '2.5em', ease: Elastic.easeOut.config(.7, 0.3), duration: 1.2}, "-=.5s")
          .to(rule, {borderRadius: '50%'}, "-=1s")
          .to('svg', {strokeDasharray: '90 103'}, "-=.7")
          .to('path', {attr: {d: 'M144.531,235.3l16.159-17.754-16.159-17.693'} }, "+=1")
          .to('p', { clipPath: 'circle(100% at 50% 50%)', duration: 1.2});
        
          tl.pause();
        
        btn.addEventListener('click', () => {
            tl.play();
        })