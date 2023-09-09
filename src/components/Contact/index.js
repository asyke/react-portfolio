import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    let timeout

    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_n3xnoas',
        'template_qx6zhxt',
        form.current,
        'o5NpdJi0Z50ZKpB36'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
    e.target.reset()
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in pursuing Front End Developer job opportunities.
            If you have any job openings or further inquiries, please don't
            hesitate to contact me using the form below. Thank you.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Asylbek Ibrakhimov,
          <br />
          USA, Chicago IL <br />
          <span>asylbek.ibrahimov@gmail.com</span>
        </div> */}
        <div className="map-wrap">
          {/* <MapContainer center={[41.8781, -87.6298]} zoom={13}> */}
          {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[41.8781, -87.6298]}>
              <Popup>Hello from Chicago, IL!</Popup>
            </Marker> */}

          <iframe
            style={{ width: '80%', height: '80%', margin: '5%' }}
            iframe
            title="berwynMap"
            src="https://www.google.com/maps/embed/v1/place?q=Chicago,+IL,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
      <Loader type="ball-triangle" />
    </>
  )
}

export default Contact
