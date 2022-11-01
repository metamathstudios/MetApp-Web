import { useState } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

import ball from './assets/ball.svg'
import ballActive from './assets/ballactive.svg'
import polygon from './assets/polygon.svg'
import ethereum from './assets/ethereum.svg'         

type nftProps = {
  title: string | undefined,
  image: any,
  network: number | null,
  address: string | undefined,
  id: number | undefined,
}

const Card = ({...props}: nftProps) => {
  const [active, setActive] = useState(false)

  const networkIcon = {
    1: ethereum,
    5: ethereum,
    137: polygon,
    80001: polygon,
  }

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>
          {props.title}
        </div>

        <div className={styles.nftContainer}>
          <img src={props.image} alt='NFT' width={160} height={160} />
          <div className={styles.network}>
            { props.network && <Image src={networkIcon[props.network]} alt='Network' /> }
          </div>
        </div>

        <div className={active == false ? styles.checkboxContainer : styles.checkboxContainerActive}>
          <div className={styles.checkbox} onClick={() => setActive(!active)}>
            <div className={styles.checkball}>
              <div className={styles.imageContainer}>
                <Image src={active == false ? ball : ballActive} alt='Check'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card