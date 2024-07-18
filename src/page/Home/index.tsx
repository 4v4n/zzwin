import React from "react"
import clsx from "clsx"
import style from "./index.module.scss"
const Home:React.FC = React.memo(()=>{
  return(
    <>
     <header>
     </header>
     <main>

     </main>
     <footer>
        <div className={clsx(style.footerItem)}>
            Home
        </div>
        <div className={clsx(style.footerItem)}>
            Browse
        </div>
        <div className={clsx(style.footerItem)}>
            Saved
        </div>
        <div className={clsx(style.footerItem)}>
            Account
        </div>
      </footer>    
    </>
  )
})

export default Home