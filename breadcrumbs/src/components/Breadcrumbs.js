import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router'
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    const [breadcrumb, setBreadcrumb] = useState([]);

    const {pathname} = useLocation()

    let breadcrumbpath = ""
    
    useEffect(() =>{
        setBreadcrumb(pathname.split('/').filter(x => x))
    }, [pathname])
    
  return (
    <div>
        <Link to={`/`}>{` Home > `} </Link>
        {breadcrumb && breadcrumb.map((item, index) => {
            breadcrumbpath+= item + '/'
            
            return (
                <Link to={`/${breadcrumbpath}`}>
                    <span key={index}>{`${item} > `}</span>
                </Link>
            )
        }
        
        )}
    </div>
  )
}

export default Breadcrumbs