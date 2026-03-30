import{r as s,j as e}from"./main-C6AlRI2V.js";const d=[{top:"5%",left:"3%",size:55,duration:14,delay:0},{top:"15%",left:"88%",size:45,duration:18,delay:2},{top:"40%",left:"92%",size:65,duration:16,delay:1},{top:"60%",left:"5%",size:50,duration:20,delay:3},{top:"75%",left:"80%",size:40,duration:13,delay:.5},{top:"85%",left:"15%",size:70,duration:17,delay:4},{top:"25%",left:"50%",size:42,duration:15,delay:2.5},{top:"50%",left:"70%",size:60,duration:19,delay:1.5}],m=[{top:"8%",left:"20%",delay:0},{top:"18%",left:"70%",delay:1},{top:"30%",left:"10%",delay:2},{top:"55%",left:"85%",delay:.5},{top:"70%",left:"30%",delay:1.5},{top:"82%",left:"60%",delay:3},{top:"45%",left:"45%",delay:2.5},{top:"92%",left:"75%",delay:.8},{top:"12%",left:"45%",delay:3.5},{top:"65%",left:"55%",delay:1.2}];function c(){const[i,o]=s.useState(!1),[l,r]=s.useState(!1),n=()=>{r(!0),o(!0),setTimeout(()=>r(!1),800)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

        body {
          margin: 0;
          min-height: 100vh;
          background: linear-gradient(135deg, #e6ccff 0%, #f5e6ff 50%, #ddb8ff 100%);
          font-family: 'Comic Sans MS', 'Caveat', cursive;
          overflow-x: hidden;
        }

        @keyframes floatButterfly {
          0%   { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25%  { transform: translateY(-22px) translateX(12px) rotate(8deg); }
          50%  { transform: translateY(-8px) translateX(-10px) rotate(-5deg); }
          75%  { transform: translateY(-30px) translateX(8px) rotate(6deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.7); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes burst {
          0%   { transform: scale(1); }
          30%  { transform: scale(1.08); }
          60%  { transform: scale(0.96); }
          100% { transform: scale(1); }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px 4px #a855f7, 0 8px 32px rgba(168,85,247,0.25); }
          50%       { box-shadow: 0 0 36px 10px #c084fc, 0 8px 48px rgba(192,132,252,0.45); }
        }

        .butterfly {
          position: fixed;
          animation: floatButterfly linear infinite;
          pointer-events: none;
          z-index: 0;
          user-select: none;
          filter: drop-shadow(0 2px 6px rgba(147,51,234,0.5));
        }

        .sparkle {
          position: fixed;
          font-size: 1.2rem;
          pointer-events: none;
          z-index: 0;
          animation: twinkle ease-in-out infinite;
        }

        .card {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(6px);
          border-radius: 28px;
          padding: 2.5rem 2rem;
          max-width: 800px;
          margin: 2.5rem auto;
          position: relative;
          z-index: 1;
          animation: pulse 3s ease-in-out infinite;
        }

        .heading {
          font-size: clamp(2rem, 6vw, 3.4rem);
          font-weight: 900;
          color: #4b0082;
          text-shadow: 2px 2px 0 #c084fc, 4px 4px 8px #e9d5ff;
          text-align: center;
          margin-bottom: 1.2rem;
          letter-spacing: 1px;
        }

        .gif-main {
          display: block;
          margin: 0 auto 1.4rem;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(147,51,234,0.3);
          max-width: 380px;
          width: 100%;
        }

        .message {
          font-size: 1.22rem;
          color: #4b0082;
          text-shadow: 1px 1px 4px #e9d5ff;
          text-align: center;
          white-space: pre-line;
          line-height: 1.8;
          margin-bottom: 1.8rem;
        }

        .soundcloud-wrap {
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 1.6rem;
          box-shadow: 0 2px 16px rgba(147,51,234,0.2);
        }

        .soundcloud-attr {
          text-align: center;
          font-size: 0.78rem;
          color: #7c3aed;
          margin-bottom: 1.4rem;
        }

        .soundcloud-attr a {
          color: #7c3aed;
        }

        .meme-row {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .meme-gif {
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(147,51,234,0.25);
          width: clamp(140px, 28%, 220px);
          object-fit: cover;
        }

        .reveal-btn {
          display: block;
          margin: 0 auto 1.6rem;
          background: linear-gradient(135deg, #7c3aed, #a855f7, #c084fc);
          color: #fff;
          font-family: inherit;
          font-size: 1.1rem;
          font-weight: 700;
          border: none;
          border-radius: 999px;
          padding: 0.8rem 2.2rem;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(124,58,237,0.4);
          transition: transform 0.15s, box-shadow 0.15s;
          letter-spacing: 0.5px;
        }

        .reveal-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 28px rgba(124,58,237,0.5);
        }

        .reveal-btn:active {
          transform: scale(0.97);
        }

        .reveal-btn.burst-anim {
          animation: burst 0.5s ease;
        }

        .hidden-message {
          display: none;
          background: linear-gradient(135deg, rgba(233,213,255,0.7), rgba(245,230,255,0.85));
          border: 2px solid #c084fc;
          border-radius: 18px;
          padding: 1.5rem 1.8rem;
          text-align: center;
          color: #4b0082;
          font-size: 1.18rem;
          line-height: 1.8;
          margin-top: 0.5rem;
          animation: fadeSlideIn 0.6s ease forwards;
        }

        .hidden-message.visible {
          display: block;
        }

        .divider {
          text-align: center;
          font-size: 1.5rem;
          letter-spacing: 6px;
          color: #a855f7;
          margin: 1.2rem 0;
        }
      `}),d.map((a,t)=>e.jsx("div",{className:"butterfly",style:{top:a.top,left:a.left,width:a.size,height:a.size,animationDuration:`${a.duration}s`,animationDelay:`${a.delay}s`},children:"🦋"},t)),m.map((a,t)=>e.jsx("div",{className:"sparkle",style:{top:a.top,left:a.left,animationDuration:`${2+t%3}s`,animationDelay:`${a.delay}s`},children:t%2===0?"✨":"⭐"},t)),e.jsxs("div",{className:"card",children:[e.jsx("h1",{className:"heading",children:"🎉 Happy Birthday! 🎉"}),e.jsx("img",{src:"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",alt:"Funny birthday animal GIF",className:"gif-main"}),e.jsx("p",{className:"message",children:`Hey Snowball! 🦋
Wishing you the happiest birthday filled with laughter, cute animals, and all the magic your heart can hold. 🐾
You're amazing, loved, and totally pawsome! 💜`}),e.jsx("div",{className:"divider",children:"💜 ✨ 💜 ✨ 💜"}),e.jsx("div",{className:"soundcloud-wrap",children:e.jsx("iframe",{width:"100%",height:"166",scrolling:"no",frameBorder:"yes",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A998557450&color=%2351158c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"})}),e.jsxs("div",{className:"soundcloud-attr",children:[e.jsx("a",{href:"https://soundcloud.com/laufey",target:"_blank",rel:"noreferrer",children:"Laufey"})," · ",e.jsx("a",{href:"https://soundcloud.com/laufey/i-wish-you-love",target:"_blank",rel:"noreferrer",children:"I Wish You Love"})]}),e.jsxs("div",{className:"meme-row",children:[e.jsx("img",{src:"https://media.giphy.com/media/ZdUnQS4AXEl96/giphy.gif",alt:"Birthday party meme GIF",className:"meme-gif"}),e.jsx("img",{src:"https://media.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif",alt:"Birthday celebration GIF",className:"meme-gif"}),e.jsx("img",{src:"https://media.giphy.com/media/CY7dTouJAyuRi/giphy.gif",alt:"Happy birthday cake GIF",className:"meme-gif"})]}),e.jsx("div",{className:"divider",children:"🎂 🎈 🎁 🎈 🎂"}),e.jsx("button",{className:`reveal-btn${l?" burst-anim":""}`,onClick:n,children:"✨ Reveal Hidden Message ✨"}),e.jsxs("div",{className:`hidden-message${i?" visible":""}`,children:["💜🦋✨",e.jsx("br",{}),e.jsx("br",{}),"You light up every room you walk into. Never forget how incredibly special you are. Here's to YOU — today and every day 💜🦋",e.jsx("br",{}),e.jsx("br",{}),"💫 Happy Birthday, Snowball! The world is so much brighter with you in it. 🌟💜",e.jsx("br",{}),e.jsx("br",{}),"💜🦋✨"]})]})]})}export{c as component};
