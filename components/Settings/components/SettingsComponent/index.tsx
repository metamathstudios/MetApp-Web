import Image from "next/image"
import styles from "./styles.module.scss"
import julia from "./assets/julia.svg"

import { useContext, useCallback, useEffect } from 'react'
import { Web3ModalContext } from '../../../../contexts/Web3ModalProvider'

const SettingsComponent = () => {

  const { account, disconnect } = useContext(Web3ModalContext);

  const handleDisconnect = useCallback(() => {
    disconnect();
    window.open('/metamask', '_self');
  }, [disconnect]);

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.profile}>
            {/* <div className={styles.imageContainer}>
              <Image src={julia} alt="Profile" />
            </div>

            <div className={styles.nameContainer}>Luan#0171</div> */}
          </div>

          <div className={styles.userSettings}>
            <div className={styles.userData}>
              <div className={styles.dataContainer}>
                <div className={styles.label}>Username</div>

                <div className={styles.data}>Luan#0171</div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainerButton}>
                <div className={styles.rowContainer}>
                  <div className={styles.leftSide}>
                    <div className={styles.label}>
                      Email
                    </div>

                    <div className={styles.data}>
                      luanpkfr@gmail.com
                    </div>
                  </div>

                  <div className={styles.rightSide}>
                    {/* <div className={styles.buttonContainer}>
                      <div className={styles.button}>Change Email</div>
                    </div> */}
                  </div>
                </div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainerButton}>
                <div className={styles.rowContainer}>
                  <div className={styles.leftSide}>
                    <div className={styles.label}>
                      Password
                    </div>

                    <div className={styles.data}>
                      ************
                    </div>
                  </div>

                  <div className={styles.rightSide}>
                    {/* <div className={styles.buttonContainer}>
                      <div className={styles.button}>Change Password</div>
                    </div> */}
                  </div>
                </div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainerButton}>
                <div className={styles.rowContainer}>
                  <div className={styles.leftSide}>
                    <div className={styles.label}>
                      Wallet
                    </div>

                    <div className={styles.data}>
                      {account}
                    </div>
                  </div>

                  <div className={styles.rightSide}>
                    <div className={styles.buttonContainer} onClick={handleDisconnect}>
                      <div className={styles.button}>Unlink Wallet</div>
                    </div>
                  </div>
                </div>

                <div className={styles.line} />
              </div>
            </div>

            <div className={styles.accountOptionsContainer}>
              <div className={styles.closeAccount} onClick={() => window.open('/', '_self')}>Exit</div>

              <div className={styles.saveButtonContainer}>
                <div className={styles.button}>Save</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsComponent
