export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { crimson: { DEFAULT:'#9b111e', dark:'#6e0b15', light:'#c4202f' }, ink:'#0d0d0d', paper:'#faf8f6' },
    fontFamily: { display:['Fraunces','Georgia','serif'], sans:['Hind','system-ui','sans-serif'] },
    keyframes: {
      pulseRing:{ '0%':{boxShadow:'0 0 0 0 rgba(155,17,30,.5)'}, '70%,100%':{boxShadow:'0 0 0 18px rgba(155,17,30,0)'} },
      float:{ '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-10px)'} },
      fadeUp:{ '0%':{opacity:'0',transform:'translateY(24px)'}, '100%':{opacity:'1',transform:'translateY(0)'} },
      underline:{ '0%':{backgroundSize:'0% 4px'}, '100%':{backgroundSize:'100% 4px'} },
      shimmer:{ '0%':{transform:'translateX(-120%) skewX(-20deg)'}, '100%':{transform:'translateX(520%) skewX(-20deg)'} },
      marquee:{ '0%':{transform:'translateX(0)'}, '100%':{transform:'translateX(-50%)'} },
      blob:{ '0%,100%':{transform:'translate(0,0) scale(1)'}, '50%':{transform:'translate(30px,-20px) scale(1.12)'} },
    },
    animation: {
      ring:'pulseRing 2s infinite', float:'float 6s ease-in-out infinite',
      fadeUp:'fadeUp .8s ease-out backwards', underline:'underline .9s ease-out 1s backwards',
      shimmer:'shimmer 3.2s ease-in-out infinite', marquee:'marquee 28s linear infinite',
      blob:'blob 12s ease-in-out infinite',
    } } },
  plugins: [],
}