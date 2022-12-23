import { EnvelopeSimple, Flag} from 'phosphor-react';
import styles from './Infoframe.module.css'
import { Icon } from '../Iconography/Icon';
import { MX } from '../Iconography/Flags';
import { InfoframeProps } from './interface/Index';


const Infoframe = ({backgroundColor,size, text, icon}:InfoframeProps) => {
    
     
    return (
        <div className={`${styles[size]} ${styles.container}`}>
      
        { icon ? <Icon  size='1.8rem' color='var(--neutral500)'  iconName={icon}/> :
        <Icon  size='1.8rem' color='var(--neutral500)'  customIcon={<MX />}/> } 
        <p className={styles.textStyle} style={{color:backgroundColor}}>{text}</p>
        </div>
        
    )
}

export default Infoframe