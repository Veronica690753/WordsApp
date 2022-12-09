import { CaretLeft, CaretRight } from 'phosphor-react'
import { useEffect } from 'react'
import { TableFooterProps } from './interface'

import styles from './Table.module.css'

const TFooter =  <T extends object>({ range, setPage, page, slice, callBack, data }:TableFooterProps<T>) => {

    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1)
        }
    }, [slice, page, setPage])

    return (
        <div className={styles.footerContainer}>
            <div
                className={styles.selectContainer}
            >
                <p>Rows per page</p>
                <select onChange={(e)=>callBack(Number(e.target.value))} className={styles.numFooter}>
                    <option>
                        1
                    </option>
                    <option>
                        3
                    </option>
                    <option>
                        5
                    </option>
                    <option>
                        10 
                    </option>
                    <option>
                        15
                    </option>
                    <option>
                        20
                    </option>
                </select>
            </div>
            <div className={styles.footerShowing}>
                <p>{`Showing ${slice.length} of ${data.length} Results`}</p>
            </div>
            <div>
                <button onClick={()=>setPage(page>1?(page-1):page)}>
                    <CaretLeft/>
                </button>
                {
                    range.map((el, index)=>(
                        <button
                        style={{background: el===page ? 'blue':'transparent'}}
                            key={index}
                            onClick={()=>setPage(el)}
                        >
                            {el}
                        </button>
                    ))
                }
                <button onClick={()=>setPage(page<range.length?(page+1):page)}>
                    <CaretRight/>
                </button>
            </div>
        </div>
    )
}

export default TFooter