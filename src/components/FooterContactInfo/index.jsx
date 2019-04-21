// import { withTrans } from 'utils'
import { useState, useEffect } from 'react'
// import ViewPort from 'components/ViewPort'
import { isMobile } from '../../utils'
import c from './index.scss'

const FooterContactInfo = ({
  address, phone, fbLink, googleLink, houseInfos, caseName,
}) => {
  const redirectToPhoneThanks = (e) => {
    e.preventDefault()
    if (isMobile) {
      window.location.href = `tel:${phone.replace('-', '')}`
    } else {
      return
    }
    setTimeout(() => {
      window.location.href = 'phoneThanks'
    }, 1000)
  }

  const [link, setFbLink] = useState('')

  useEffect(() => {
    setFbLink(fbLink)
  }, [fbLink])
  return (
    <div className={c.bg}>
      <div className={c.container}>
        <img src={require('./logo.png')} alt="" className={c.logo} />
        <div className={c.content}>
          <div className={c.houseInfo}>
            <h3>建案資訊</h3>
            {houseInfos.map((info, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`house-${index}`}>
                <span>{info[0]}: </span>
                <span>{info[1]}</span>
              </p>
            ))}
          </div>
          <div className={c.contactInfo}>
            <h3>聯絡資訊</h3>
            <a
              href={`tel:${phone.replace('-', '')}`}
              rel="noopener noreferrer"
              onClick={redirectToPhoneThanks}
            >
              賞屋專線：{phone}
            </a>
            <a href={googleLink} target="_blank" rel="noopener noreferrer">
              接待會館：{address}
            </a>
            {/* <p>賞屋專線：{phone}</p>
            <p>接待會館：{address}</p> */}
            <img src={require('./map.png')} alt="" className={c.map} />
          </div>
          <div className={c.socialInfo}>
            <h3>facebook</h3>
            <div className={c.fbBlock}>
              <div
                className="fb-page"
                data-href={link}
                data-tabs="timeline"
                // data-width="200"
                data-height="65"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              >
                <blockquote cite={link} className="fb-xfbml-parse-ignore">
                  <a href={link}>{caseName}</a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContactInfo
