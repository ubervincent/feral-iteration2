import styles from '../styles/Regulation.module.scss'

export const RegulationHero = () => {
    return (
        <div className={styles.regulationHero}>
            <p>
            {/* <div className={styles.regulationHeroInfo}> */}
             <div className={styles.regulationHeroInfo1}> 
               Learn About The Regulations 
              </div>                        
            {/* s */}
            <div className={styles.regulationHeroInfo}>
                There are some regulations about eradicating activity you need to know                          
            </div>
            </p>   
        </div>
    )
}