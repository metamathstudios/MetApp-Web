import Card from './components/Card'

import styles from './styles.module.scss'

import test2 from './components/Card/assets/test2.svg'

import { useContext, useEffect, useState } from 'react'
import { AssetManagerContext } from '../../../../contexts/AssetManager'
import { Web3ModalContext } from '../../../../contexts/Web3ModalProvider'

const Gallery = () => {

  const { chainId, account } = useContext(Web3ModalContext)
  const { assets, fetch } = useContext(AssetManagerContext)

  const handle = async () => {
    if(chainId && account) {
    fetch(chainId, account)
    }
  }

  useEffect(() => {
    console.log(assets)
  }, [assets])

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.text}>
          Activate your NTFs to appear in your application <br />
          if you have not yet downloaded the application <span onClick={handle}>click here</span> <br />
          or enter the download tab
        </div>

        <div className={styles.gridContainer}>
          <Card title='Bored Ape #4372' image={test2} network='ethereum' />
          <Card title='Bored Ape #4372' image={test2} network='ethereum' />
          <Card title='Bored Ape #4372' image={test2} network='polygon' />
          <Card title='Bored Ape #4372' image={test2} network='ethereum' />
          <Card title='Bored Ape #4372' image={test2} network='polygon' />
        </div>
      </div>
    </div>
  )
}

export default Gallery