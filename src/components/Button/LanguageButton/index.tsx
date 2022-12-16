import { CaretDown, PencilSimple } from 'phosphor-react'
import React from 'react'
import styles from './LanguageButton.module.css'
import { Icon } from '../../Iconography/Icon';
import { MouseEventHandler, ReactElement } from 'react';

interface LanguageProps {
  icon?: string,
  flag: string | ReactElement | ReactElement[],
  onClick?: MouseEventHandler<HTMLDivElement>
}

const LanguageButton
  = ({ icon, flag,onClick }: LanguageProps) => {
    return (
      <div role='button' onClick={onClick} className={styles.contenedorLanguage}>
        <div className={styles.iconStyles}>

          <Icon size='1.8rem' color='var(--neutral500)' customIcon={flag} />
          {/* <Icon size='1.8rem' color='var(--neutral500)' customIcon={<EN />} /> */}
        </div>
        <label htmlFor="lng">
        </label>
        <select className={styles.textLanguage} name="lng" id="lng">
          <option className={styles.options} value='english'>English</option>
          <option className={styles.options} value='spanish' >Spanish</option>
          <option className={styles.options} value='other'>...</option>
        </select>

      </div>

    )
  }

export default LanguageButton