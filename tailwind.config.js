/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "broch2014": "url('https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/History/BrochureIMG/T2014.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIaXN0b3J5L0Jyb2NodXJlSU1HL1QyMDE0LmpwZyIsImlhdCI6MTcyNTA5MDY5MywiZXhwIjoxNzU2NjI2NjkzfQ.UdPaoJsLdUpEs6NaAv3coEBMr3P2Ab93CQpD1OLwTTI&t=2024-08-31T07%3A51%3A34.217Z')",
        "broch2015": "url('https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/History/BrochureIMG/T2015.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIaXN0b3J5L0Jyb2NodXJlSU1HL1QyMDE1LmpwZyIsImlhdCI6MTcyNTA5MDcwNSwiZXhwIjoxNzU2NjI2NzA1fQ.8ZKJKdqlUe1trvGEdQ2wKNx9oX2L7rSb3e6AZVowrYA&t=2024-08-31T07%3A51%3A47.533Z')",
        "broch2016": "url(https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/History/BrochureIMG/T2016.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIaXN0b3J5L0Jyb2NodXJlSU1HL1QyMDE2LmpwZyIsImlhdCI6MTcyNTA5MTc0NSwiZXhwIjoxNzU2NjI3NzQ1fQ.sNtMFI0xKLnN9VBmC0UoIRDcexvX1FVC2CCosAk-rJQ&t=2024-08-31T08%3A09%3A05.539Z)",
        "broch2017": "url('https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/History/BrochureIMG/T2017.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIaXN0b3J5L0Jyb2NodXJlSU1HL1QyMDE3LmpwZyIsImlhdCI6MTcyNTA5MTc2MCwiZXhwIjoxNzU2NjI3NzYwfQ.G_IE2v4vSz7ZC0Bw7C7DbII04oyQXck4rpMRjA_Gzhk&t=2024-08-31T08%3A09%3A20.944Z')",
        "broch2018": "url(https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/History/BrochureIMG/T2018.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIaXN0b3J5L0Jyb2NodXJlSU1HL1QyMDE4LmpwZyIsImlhdCI6MTcyNTA5MTc3MSwiZXhwIjoxNzU2NjI3NzcxfQ.l2qkiB72qJ63nxRCtzK9tCzUXYYEYPWj5kuCKSfRE0A&t=2024-08-31T08%3A09%3A32.574Z)",
        "broch2019": "url('https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/History/BrochureIMG/T2019.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIaXN0b3J5L0Jyb2NodXJlSU1HL1QyMDE5LmpwZyIsImlhdCI6MTcyNTA5MTc4MSwiZXhwIjoxNzU2NjI3NzgxfQ.RYWBIfK6SBUqOPMYhTlOniR0czwb6bSC5pQIbwCpc4I&t=2024-08-31T08%3A09%3A41.975Z')",
        "broch2022": "url('https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/History/BrochureIMG/T2022.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIaXN0b3J5L0Jyb2NodXJlSU1HL1QyMDIyLmpwZyIsImlhdCI6MTcyNTA5MTc5OCwiZXhwIjoxNzU2NjI3Nzk4fQ.l6h3ZLaO9o6OFCcE8u1v4hSWufTWdRx087xBcnyZV5g&t=2024-08-31T08%3A09%3A59.424Z')",
        "broch2024": "url(https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/2024/cover.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIyMDI0L2NvdmVyLmpwZyIsImlhdCI6MTcyNTEyNTIyNCwiZXhwIjoxNzU2NjYxMjI0fQ.hUFSJR5b5ExZoMJY5FzjtybIsRfZBXbEzbt5RoXkCDI&t=2024-08-31T17%3A27%3A05.512Z)",
        'background': "url('https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/Home/download.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb21lL2Rvd25sb2FkLnBuZyIsImlhdCI6MTcyNTA5MjE5MSwiZXhwIjoxNzU2NjI4MTkxfQ.jNaNpVI38HZyUNm5XP4c5oYS7sd9In0DH40J0VK9kZU&t=2024-08-31T08%3A16%3A32.414Z')",
        'oppen': "url('https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/EventsPage/oppen.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFdmVudHNQYWdlL29wcGVuLmpwZyIsImlhdCI6MTcyNTA5MjE1MiwiZXhwIjoxNzU2NjI4MTUyfQ.Y2hN2_xkdOLwpw_KNi-_sJ4xciz3Ky2hIbvXat2dhgg&t=2024-08-31T08%3A15%3A53.247Z')",
        'clock': "url('https://sivpthcvunwbhqmkmhee.supabase.co/storage/v1/object/sign/History/hero_history.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIaXN0b3J5L2hlcm9faGlzdG9yeS5qcGciLCJpYXQiOjE3MjUwOTA1NDUsImV4cCI6MTc1NjYyNjU0NX0.NKCocarJa9OLpmEq4xobkp4tBJFfYYQl9bIq0pbGrM4&t=2024-08-31T07%3A49%3A05.387Z')"
      },
      colors:{
        'yellow-orange': '#FEB43C',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}