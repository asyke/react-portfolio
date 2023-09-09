import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/index.js'
import myAvatar from '../../assets/images/avatar-img1.jpg'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(true)

  const nameArray = ['A', 's', 'y', 'l', 'b', 'e', 'k']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    ' ',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 4100)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 9100)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const override = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  }

  return (
    <>
      {loading && (
        <ClimbingBoxLoader
          cssOverride={override}
          color={'white'}
          loading={loading}
          size={30}
        />
      )}
      {!loading && (
        <div className="home-page">
          {/* <div className="myImageContainer">
            <img className="myImage" src={myAvatar} alt="avatar-img" />
          </div> */}
          <div className="text-zone">
            <h1>
              <span className={`${letterClass} _13`}>H</span>
              <span className={`${letterClass} _14`}>i,</span>
              <br />
              <span className={`${letterClass} _15`}>I</span>
              <span className={`${letterClass} _16`}>'m</span>
              <span className={`${letterClass} _17`}></span>

              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={16}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={23}
              />
            </h1>
            <h2>JavaScript | React | Redux </h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
