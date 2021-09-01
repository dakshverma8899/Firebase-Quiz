import { useCallback } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {Link} from 'react-router-dom'
const Signup = () => {
  const handleSubmit = useCallback(async e => {
    e.preventDefault()

    const { email, password } = e.target.elements
    const auth = getAuth()
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
    } catch (e) {
      alert(e.message)
    }
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="e-c">
            <div className="item">
              <svg width="217" height="45" viewBox="0 0 217 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0156 19.7891C9.15625 18.6797 6.34375 17.3203 4.57812 15.7109C2.82812 14.0859 1.95312 12.0859 1.95312 9.71094C1.95312 7.02344 3.02344 4.80469 5.16406 3.05469C7.32031 1.28906 10.1172 0.40625 13.5547 0.40625C15.8984 0.40625 17.9844 0.859375 19.8125 1.76562C21.6562 2.67188 23.0781 3.92188 24.0781 5.51562C25.0938 7.10938 25.6016 8.85156 25.6016 10.7422H21.0781C21.0781 8.67969 20.4219 7.0625 19.1094 5.89062C17.7969 4.70312 15.9453 4.10938 13.5547 4.10938C11.3359 4.10938 9.60156 4.60156 8.35156 5.58594C7.11719 6.55469 6.5 7.90625 6.5 9.64062C6.5 11.0312 7.08594 12.2109 8.25781 13.1797C9.44531 14.1328 11.4531 15.0078 14.2812 15.8047C17.125 16.6016 19.3438 17.4844 20.9375 18.4531C22.5469 19.4062 23.7344 20.5234 24.5 21.8047C25.2812 23.0859 25.6719 24.5938 25.6719 26.3281C25.6719 29.0938 24.5938 31.3125 22.4375 32.9844C20.2812 34.6406 17.3984 35.4688 13.7891 35.4688C11.4453 35.4688 9.25781 35.0234 7.22656 34.1328C5.19531 33.2266 3.625 31.9922 2.51562 30.4297C1.42188 28.8672 0.875 27.0938 0.875 25.1094H5.39844C5.39844 27.1719 6.15625 28.8047 7.67188 30.0078C9.20312 31.1953 11.2422 31.7891 13.7891 31.7891C16.1641 31.7891 17.9844 31.3047 19.25 30.3359C20.5156 29.3672 21.1484 28.0469 21.1484 26.375C21.1484 24.7031 20.5625 23.4141 19.3906 22.5078C18.2188 21.5859 16.0938 20.6797 13.0156 19.7891ZM35.4922 35H31.1562V9.64062H35.4922V35ZM30.8047 2.91406C30.8047 2.21094 31.0156 1.61719 31.4375 1.13281C31.875 0.648437 32.5156 0.40625 33.3594 0.40625C34.2031 0.40625 34.8438 0.648437 35.2812 1.13281C35.7188 1.61719 35.9375 2.21094 35.9375 2.91406C35.9375 3.61719 35.7188 4.20312 35.2812 4.67188C34.8438 5.14062 34.2031 5.375 33.3594 5.375C32.5156 5.375 31.875 5.14062 31.4375 4.67188C31.0156 4.20312 30.8047 3.61719 30.8047 2.91406ZM41.4219 22.1094C41.4219 18.1562 42.3359 15.0156 44.1641 12.6875C45.9922 10.3438 48.4141 9.17188 51.4297 9.17188C54.5234 9.17188 56.9375 10.2656 58.6719 12.4531L58.8828 9.64062H62.8438V34.3906C62.8438 37.6719 61.8672 40.2578 59.9141 42.1484C57.9766 44.0391 55.3672 44.9844 52.0859 44.9844C50.2578 44.9844 48.4688 44.5938 46.7188 43.8125C44.9688 43.0312 43.6328 41.9609 42.7109 40.6016L44.9609 38C46.8203 40.2969 49.0938 41.4453 51.7812 41.4453C53.8906 41.4453 55.5312 40.8516 56.7031 39.6641C57.8906 38.4766 58.4844 36.8047 58.4844 34.6484V32.4688C56.75 34.4688 54.3828 35.4688 51.3828 35.4688C48.4141 35.4688 46.0078 34.2734 44.1641 31.8828C42.3359 29.4922 41.4219 26.2344 41.4219 22.1094ZM45.7812 22.6016C45.7812 25.4609 46.3672 27.7109 47.5391 29.3516C48.7109 30.9766 50.3516 31.7891 52.4609 31.7891C55.1953 31.7891 57.2031 30.5469 58.4844 28.0625V16.4844C57.1562 14.0625 55.1641 12.8516 52.5078 12.8516C50.3984 12.8516 48.75 13.6719 47.5625 15.3125C46.375 16.9531 45.7812 19.3828 45.7812 22.6016ZM73.5078 9.64062L73.6484 12.8281C75.5859 10.3906 78.1172 9.17188 81.2422 9.17188C86.6016 9.17188 89.3047 12.1953 89.3516 18.2422V35H85.0156V18.2188C85 16.3906 84.5781 15.0391 83.75 14.1641C82.9375 13.2891 81.6641 12.8516 79.9297 12.8516C78.5234 12.8516 77.2891 13.2266 76.2266 13.9766C75.1641 14.7266 74.3359 15.7109 73.7422 16.9297V35H69.4062V9.64062H73.5078ZM123.453 32.4922C121.766 34.4766 119.289 35.4688 116.023 35.4688C113.32 35.4688 111.258 34.6875 109.836 33.125C108.43 31.5469 107.719 29.2188 107.703 26.1406V9.64062H112.039V26.0234C112.039 29.8672 113.602 31.7891 116.727 31.7891C120.039 31.7891 122.242 30.5547 123.336 28.0859V9.64062H127.672V35H123.547L123.453 32.4922ZM155.703 22.6016C155.703 26.4609 154.82 29.5703 153.055 31.9297C151.289 34.2891 148.898 35.4688 145.883 35.4688C142.805 35.4688 140.383 34.4922 138.617 32.5391V44.75H134.281V9.64062H138.242L138.453 12.4531C140.219 10.2656 142.672 9.17188 145.812 9.17188C148.859 9.17188 151.266 10.3203 153.031 12.6172C154.812 14.9141 155.703 18.1094 155.703 22.2031V22.6016ZM151.367 22.1094C151.367 19.25 150.758 16.9922 149.539 15.3359C148.32 13.6797 146.648 12.8516 144.523 12.8516C141.898 12.8516 139.93 14.0156 138.617 16.3438V28.4609C139.914 30.7734 141.898 31.9297 144.57 31.9297C146.648 31.9297 148.297 31.1094 149.516 29.4688C150.75 27.8125 151.367 25.3594 151.367 22.1094Z" fill="white" />
                <path d="M212 36C212 38.209 210.209 40 208 40H186C183.791 40 182 38.209 182 36V8C182 5.791 183.791 4 186 4H208C210.209 4 212 5.791 212 8V36Z" fill="#CCD6DD" />
                <path d="M208 28C208 28.553 207.553 29 207 29H187C186.448 29 186 28.553 186 28C186 27.447 186.448 27 187 27H207C207.553 27 208 27.447 208 28ZM192 32C192 32.553 191.552 33 191 33H187C186.448 33 186 32.553 186 32C186 31.447 186.448 31 187 31H191C191.552 31 192 31.447 192 32ZM208 12C208 12.552 207.553 13 207 13H187C186.448 13 186 12.552 186 12C186 11.448 186.448 11 187 11H207C207.553 11 208 11.448 208 12ZM208 16C208 16.553 207.553 17 207 17H187C186.448 17 186 16.553 186 16C186 15.447 186.448 15 187 15H207C207.553 15 208 15.447 208 16ZM208 20C208 20.553 207.553 21 207 21H187C186.448 21 186 20.553 186 20C186 19.447 186.448 19 187 19H207C207.553 19 208 19.447 208 20ZM208 24C208 24.553 207.553 25 207 25H187C186.448 25 186 24.553 186 24C186 23.447 186.448 23 187 23H207C207.553 23 208 23.447 208 24Z" fill="#99AAB5" />
                <path d="M212 10.272C211.173 9.73699 210.163 9.69299 209.479 10.249L208.687 10.895L207.203 12.106L207.103 12.186L204.727 14.124L192.849 23.81C192.412 24.167 192.056 25.029 191.676 25.884C191.298 26.734 190.707 28.736 190.233 30.275C190.085 30.525 189.168 32.121 189.682 32.728C190.202 33.343 192.008 32.738 192.25 32.652C193.876 32.478 195.981 32.279 196.898 32.072C197.822 31.861 198.752 31.677 199.189 31.32C199.197 31.314 199.199 31.302 199.206 31.297L211.064 21.631L211.856 20.985L212 20.867V10.272V10.272Z" fill="#66757F" />
                <path d="M199.145 26.526C199.145 26.526 197.871 24.645 197.028 23.973C196.356 23.13 194.479 21.857 194.479 21.857C194.031 21.411 193.288 21.377 192.85 21.814C192.413 22.252 192.057 23.18 191.677 24.105C191.205 25.251 190.401 28.259 189.909 29.857C189.826 30.129 190.426 29.407 190.412 29.647C190.402 29.834 190.439 30.041 190.486 30.228L190.34 30.387L190.548 30.454C190.573 30.536 190.598 30.608 190.616 30.664L190.775 30.518C190.962 30.565 191.169 30.602 191.355 30.592C191.595 30.578 190.872 31.179 191.145 31.095C192.743 30.602 195.752 29.799 196.897 29.327C197.821 28.946 198.751 28.591 199.188 28.153C199.627 27.718 199.594 26.975 199.145 26.526Z" fill="#D99E82" />
                <path d="M206.312 8.35101C205.436 9.22601 205.436 10.644 206.312 11.519L209.479 14.687C210.355 15.561 211.773 15.561 212.647 14.687L215.816 11.519C216.69 10.644 216.69 9.22601 215.816 8.35101L212.647 5.18301C211.773 4.30801 210.355 4.30801 209.479 5.18301L206.312 8.35101V8.35101Z" fill="#EA596E" />
                <path d="M192.849 21.815L196.019 24.985L199.184 28.151L211.065 16.272L204.728 9.936L192.849 21.815V21.815Z" fill="#FFCC4D" />
                <path d="M192.298 30.742C192.298 30.742 190.238 31.875 189.682 31.318C189.125 30.76 190.263 28.707 190.263 28.707C190.263 28.707 192.214 28.743 192.298 30.742Z" fill="#292F33" />
                <path d="M204.728 9.93501L208.688 5.97501L215.024 12.312L211.064 16.272L204.728 9.93501Z" fill="#CCD6DD" />
                <path d="M207.103 7.55799L207.895 6.76599L214.231 13.101L213.439 13.893L207.103 7.55799ZM205.52 9.14199L206.311 8.35099L212.647 14.686L211.855 15.478L205.52 9.14199Z" fill="#99AAB5" />
              </svg>



            </div>
            <div className="item">




              <input name="email" placeholder="email" type="email" />
            </div>
            <div className="item">



              <input name="password" placeholder="password" type="password" />
            </div>
            <button className="button" type="submit"><svg className="submit" width="220" height="67" viewBox="0 0 242 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M237.875 8.375C237.875 7.26441 237.44 6.1993 236.667 5.41399C235.893 4.62868 234.844 4.1875 233.75 4.1875H184.25C183.156 4.1875 182.107 4.62868 181.333 5.41399C180.56 6.1993 180.125 7.26441 180.125 8.375V58.625C180.125 59.7356 180.56 60.8007 181.333 61.586C182.107 62.3713 183.156 62.8125 184.25 62.8125H233.75C234.844 62.8125 235.893 62.3713 236.667 61.586C237.44 60.8007 237.875 59.7356 237.875 58.625V8.375ZM176 8.375C176 6.15381 176.869 4.0236 178.416 2.45298C179.964 0.882364 182.062 0 184.25 0L233.75 0C235.938 0 238.036 0.882364 239.584 2.45298C241.131 4.0236 242 6.15381 242 8.375V58.625C242 60.8462 241.131 62.9764 239.584 64.547C238.036 66.1176 235.938 67 233.75 67H184.25C182.062 67 179.964 66.1176 178.416 64.547C176.869 62.9764 176 60.8462 176 58.625V8.375ZM194.563 31.4063C194.015 31.4063 193.491 31.6268 193.104 32.0195C192.717 32.4121 192.5 32.9447 192.5 33.5C192.5 34.0553 192.717 34.5879 193.104 34.9805C193.491 35.3732 194.015 35.5938 194.563 35.5938H218.459L209.602 44.5801C209.41 44.7748 209.258 45.0059 209.155 45.2602C209.051 45.5146 208.997 45.7872 208.997 46.0625C208.997 46.3378 209.051 46.6104 209.155 46.8648C209.258 47.1191 209.41 47.3502 209.602 47.5449C209.794 47.7395 210.022 47.894 210.272 47.9993C210.523 48.1047 210.791 48.1589 211.063 48.1589C211.334 48.1589 211.602 48.1047 211.853 47.9993C212.103 47.894 212.331 47.7395 212.523 47.5449L224.898 34.9824C225.09 34.7879 225.242 34.5568 225.346 34.3025C225.45 34.0481 225.504 33.7754 225.504 33.5C225.504 33.2246 225.45 32.9519 225.346 32.6975C225.242 32.4432 225.09 32.2121 224.898 32.0176L212.523 19.4551C212.331 19.2605 212.103 19.106 211.853 19.0007C211.602 18.8953 211.334 18.8411 211.063 18.8411C210.791 18.8411 210.523 18.8953 210.272 19.0007C210.022 19.106 209.794 19.2605 209.602 19.4551C209.41 19.6498 209.258 19.8809 209.155 20.1352C209.051 20.3896 208.997 20.6622 208.997 20.9375C208.997 21.2128 209.051 21.4854 209.155 21.7398C209.258 21.9941 209.41 22.2252 209.602 22.4199L218.459 31.4063H194.563Z" fill="#FF0000" />
              <path d="M13.0156 28.7891C9.15625 27.6797 6.34375 26.3203 4.57812 24.7109C2.82812 23.0859 1.95312 21.0859 1.95312 18.7109C1.95312 16.0234 3.02344 13.8047 5.16406 12.0547C7.32031 10.2891 10.1172 9.40625 13.5547 9.40625C15.8984 9.40625 17.9844 9.85937 19.8125 10.7656C21.6562 11.6719 23.0781 12.9219 24.0781 14.5156C25.0938 16.1094 25.6016 17.8516 25.6016 19.7422H21.0781C21.0781 17.6797 20.4219 16.0625 19.1094 14.8906C17.7969 13.7031 15.9453 13.1094 13.5547 13.1094C11.3359 13.1094 9.60156 13.6016 8.35156 14.5859C7.11719 15.5547 6.5 16.9062 6.5 18.6406C6.5 20.0312 7.08594 21.2109 8.25781 22.1797C9.44531 23.1328 11.4531 24.0078 14.2812 24.8047C17.125 25.6016 19.3438 26.4844 20.9375 27.4531C22.5469 28.4062 23.7344 29.5234 24.5 30.8047C25.2812 32.0859 25.6719 33.5938 25.6719 35.3281C25.6719 38.0938 24.5938 40.3125 22.4375 41.9844C20.2812 43.6406 17.3984 44.4688 13.7891 44.4688C11.4453 44.4688 9.25781 44.0234 7.22656 43.1328C5.19531 42.2266 3.625 40.9922 2.51562 39.4297C1.42188 37.8672 0.875 36.0938 0.875 34.1094H5.39844C5.39844 36.1719 6.15625 37.8047 7.67188 39.0078C9.20312 40.1953 11.2422 40.7891 13.7891 40.7891C16.1641 40.7891 17.9844 40.3047 19.25 39.3359C20.5156 38.3672 21.1484 37.0469 21.1484 35.375C21.1484 33.7031 20.5625 32.4141 19.3906 31.5078C18.2188 30.5859 16.0938 29.6797 13.0156 28.7891ZM46.4375 41.4922C44.75 43.4766 42.2734 44.4688 39.0078 44.4688C36.3047 44.4688 34.2422 43.6875 32.8203 42.125C31.4141 40.5469 30.7031 38.2188 30.6875 35.1406V18.6406H35.0234V35.0234C35.0234 38.8672 36.5859 40.7891 39.7109 40.7891C43.0234 40.7891 45.2266 39.5547 46.3203 37.0859V18.6406H50.6562V44H46.5312L46.4375 41.4922ZM78.7344 31.6016C78.7344 35.4766 77.8438 38.5938 76.0625 40.9531C74.2812 43.2969 71.8906 44.4688 68.8906 44.4688C65.6875 44.4688 63.2109 43.3359 61.4609 41.0703L61.25 44H57.2656V8H61.6016V21.4297C63.3516 19.2578 65.7656 18.1719 68.8438 18.1719C71.9219 18.1719 74.3359 19.3359 76.0859 21.6641C77.8516 23.9922 78.7344 27.1797 78.7344 31.2266V31.6016ZM74.3984 31.1094C74.3984 28.1562 73.8281 25.875 72.6875 24.2656C71.5469 22.6562 69.9062 21.8516 67.7656 21.8516C64.9062 21.8516 62.8516 23.1797 61.6016 25.8359V36.8047C62.9297 39.4609 65 40.7891 67.8125 40.7891C69.8906 40.7891 71.5078 39.9844 72.6641 38.375C73.8203 36.7656 74.3984 34.3438 74.3984 31.1094ZM88.2969 18.6406L88.4141 21.4531C90.2734 19.2656 92.7812 18.1719 95.9375 18.1719C99.4844 18.1719 101.898 19.5312 103.18 22.25C104.023 21.0312 105.117 20.0469 106.461 19.2969C107.82 18.5469 109.422 18.1719 111.266 18.1719C116.828 18.1719 119.656 21.1172 119.75 27.0078V44H115.414V27.2656C115.414 25.4531 115 24.1016 114.172 23.2109C113.344 22.3047 111.953 21.8516 110 21.8516C108.391 21.8516 107.055 22.3359 105.992 23.3047C104.93 24.2578 104.312 25.5469 104.141 27.1719V44H99.7812V27.3828C99.7812 23.6953 97.9766 21.8516 94.3672 21.8516C91.5234 21.8516 89.5781 23.0625 88.5312 25.4844V44H84.1953V18.6406H88.2969ZM131.023 44H126.688V18.6406H131.023V44ZM126.336 11.9141C126.336 11.2109 126.547 10.6172 126.969 10.1328C127.406 9.64844 128.047 9.40625 128.891 9.40625C129.734 9.40625 130.375 9.64844 130.812 10.1328C131.25 10.6172 131.469 11.2109 131.469 11.9141C131.469 12.6172 131.25 13.2031 130.812 13.6719C130.375 14.1406 129.734 14.375 128.891 14.375C128.047 14.375 127.406 14.1406 126.969 13.6719C126.547 13.2031 126.336 12.6172 126.336 11.9141ZM143.867 12.5V18.6406H148.602V21.9922H143.867V37.7188C143.867 38.7344 144.078 39.5 144.5 40.0156C144.922 40.5156 145.641 40.7656 146.656 40.7656C147.156 40.7656 147.844 40.6719 148.719 40.4844V44C147.578 44.3125 146.469 44.4688 145.391 44.4688C143.453 44.4688 141.992 43.8828 141.008 42.7109C140.023 41.5391 139.531 39.875 139.531 37.7188V21.9922H134.914V18.6406H139.531V12.5H143.867Z" fill="#FFFF00" />
            </svg>
            </button>
              <Link to="/login"><h2>Already Have a account ? Login</h2></Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default Signup