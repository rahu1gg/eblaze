import { Bodies, Body, Common, Composite, Engine, Events, Mouse, MouseConstraint, Query, Render, Runner, World } from 'matter-js';
import { useEffect, useRef } from 'react';

export function EblazeSphere() {
  const scene = useRef();
  const engine = useRef(Engine.create());

  useEffect(() => {
    let render;
    async function createSphere() {
      const cw = scene.current.clientWidth;
      const sW = scene.current.offsetWidth;
      const halfsW = sW / 2;
      const circleW = sW / 15;
      let majorPlatformVersion;

      if (navigator.userAgentData) {
        if (navigator.userAgentData.platform === 'Windows') {
          let ua = await navigator.userAgentData.getHighEntropyValues(['platformVersion']);
          majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
        }
      }

      render = Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
          isSensor: true,
          width: cw,
          height: cw,
          wireframes: false,
          background: 'transparent',
        },
      });

      if (majorPlatformVersion >= 13) {
        engine.current.timing.timeScale = 0.35;
      }

      engine.current.gravity.y = 1;
      engine.current.gravity.x = 0;
      engine.current.gravity.scale = 0.0025;

      // create stack circles
      let stack = [];
      for (let i = 0; i < 15; i++) {
        stack.push(
          Bodies.circle(halfsW, halfsW, circleW, {
            restitution: 0.5,
            density: 0.05,
            collisionFilter: {
              category: 0x0003,
              mask: 0x0003 | 0x0001,
            },
            render: {
              fillStyle: '#0C0B0B',
              strokeStyle: 'white',
              lineWidth: 2,
            },
          }),
        );
      }

      for (let i = 0; i < 20; i++) {
        stack.push(
          Bodies.circle(halfsW, halfsW, circleW, {
            restitution: 0.5,
            density: 0.05,
            collisionFilter: {
              category: 0x0004,
              mask: 0x0004 | 0x0001,
            },
            render: {
              fillStyle: '#0C0B0B',
              strokeStyle: 'white',
              lineWidth: 1,
            },
          }),
        );
      }

      Composite.add(engine.current.world, stack);

      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine.current, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

      mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel);
      mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel);

      const shakeScene = (engine, bodies) => {
        const timeScale = 1000 / 60 / engine.timing.lastDelta;

        for (let i = 0; i < bodies.length; i++) {
          const body = bodies[i];

          if (!body.isStatic) {
            // scale force for mass and time applied
            const forceMagnitude = 0.03 * body.mass * timeScale;

            // apply the force over a single update
            Body.applyForce(body, body.position, {
              x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
              y: -forceMagnitude + Common.random() * -forceMagnitude,
            });
          }
        }
      };

      Events.on(mouseConstraint, 'mousemove', (event) => {
        // get bodies
        const foundPhysics = Query.point(stack, event.mouse.position);
        shakeScene(engine.current, foundPhysics);
      });

      Composite.add(engine.current.world, mouseConstraint);

      // keep the mouse in sync with rendering
      render.mouse = mouse;

      Render.run(render);

      const r = sW / 2;
      let parts = [];
      const pegCount = 32;
      const TAU = Math.PI * 2;

      for (let i = 0; i < pegCount; i++) {
        const segment = TAU / pegCount;
        const angle2 = (i / pegCount) * TAU + segment / 2;
        const x2 = Math.cos(angle2);
        const y2 = Math.sin(angle2);
        const cx2 = x2 * r + sW / 2;
        const cy2 = y2 * r + sW / 2;
        let rect = addRect({
          x: cx2,
          y: cy2,
          w: (10 / 1000) * sW,
          h: (400 / 1000) * sW,
          options: {
            angle: angle2,
            isStatic: true,
            density: 1,
            render: {
              fillStyle: 'transparent',
              strokeStyle: 'transparent',
              lineWidth: 0,
            },
          },
        });
        parts.push(rect);
      }

      function addBody(...body) {
        World.add(engine.current.world, ...body);
      }

      function addRect({ x = 0, y = 0, w = 10, h = 10, options = {} } = {}) {
        let body = Bodies.rectangle(x, y, w, h, options);
        addBody(body);
        return body;
      }

      // create runner
      let runner = Runner.create();

      // run the engine
      Runner.run(runner, engine.current);

      const dropzoneClass = 'sphere-canvas';

      let startDrag = 0;

      Events.on(mouseConstraint, 'startdrag', (event) => {
        startDrag = 1;
      });

      Events.on(mouseConstraint, 'enddrag', (event) => {
        startDrag = 0;
      });

      document.querySelector('#sphere-real canvas').classList.add('sphere-canvas');

      const targetNode = document.querySelector('.sphere-canvas');
      targetNode.style = 'clip-path: circle(50%); overflow: hidden;';

      function triggerMouseEvent(node, eventType) {
        const clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
      }

      window.addEventListener('mousemove', (e) => {
        if (e.toElement.getAttribute('class') !== dropzoneClass && startDrag) {
          triggerMouseEvent(targetNode, 'mouseup');
        }
      });

      function triggerTouchEvent(node, eventType) {
        const clickEvent = document.createEvent('TouchEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
      }

      window.addEventListener('touchmove', (e) => {
        if (!e.target.classList.contains(dropzoneClass) && startDrag) {
          triggerTouchEvent(targetNode, 'touchend');
        }
      });

      window.addEventListener('resize', () => {
        render.bounds.max.x = scene.current.offsetWidth;
        render.bounds.max.y = scene.current.offsetHeight;
        render.options.width = scene.current.offsetWidth;
        render.options.height = scene.current.offsetHeight;
        render.canvas.width = scene.current.offsetWidth;
        render.canvas.height = scene.current.offsetHeight;
      });
    }

    createSphere();

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div className='relative flex items-center justify-center flex-col text-[0.16rem] text-center border rounded-[50%] aspect-square p-[0.9rem] clip-circle'>
      <div ref={scene} style={{ width: '100%', height: '100%' }} id='sphere-real' />
      <div className='absolute top-1/2 left-1/2 w-max h-auto text-xs text-background -translate-x-1/2 -translate-y-1/2 font-bold'>Eblaze</div>
    </div>
  );
}
