/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html", 
  "./src/**/*.{js,ts,jsx,tsx}"
],
theme: {
  extend: {
    fontFamily: {
      'serif': ['Merriweather', 'serif'],
      'sans': ['Merriweather Sans', 'sans-serif'],
    },
  colors: {
      'custom-bg': 'rgb(122, 172, 161)',
    },
  backgroundImage: {
    'bookBgImage' : "url('public/img/hard-cover-books.jpg')"
  }
  },
},
plugins: [],
}

