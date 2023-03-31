import HeaderWAStyles from './HeaderWA.module.css';
import SearchBarInput from '../SearchBarInput';

export const HeaderWA = ()=>{
    return(
        <div className={HeaderWAStyles.headerContainer}>
              <h1 className={HeaderWAStyles.headerTitle}> Check out a city's weather  </h1>
              <div className={HeaderWAStyles.searchBarContainer}>
                <SearchBarInput classNameStyles={HeaderWAStyles.searchBarInput}/>
              </div>
        </div>
    )
}