import { createContext, useEffect, useState } from "react";
import { dataFile } from "../data";
import { scrollIt, initMagicMobile } from '../functions/scrollPages';

export const DataContext = createContext();

export function DataProvider (props){
    const data = dataFile;
    const [language, setLanguage] = useState('eng');
    const [lang, setLang] = useState({});

    useEffect(() => {
      const langData = (language === 'eng') ? data.eng : data.esp;
      setLang(langData);
    }, [language, data])

    useEffect(() => {
      initMagicMobile();
    }, [])

    return (
        <DataContext.Provider value={{
            data, language, setLanguage, lang, setLang, scrollIt
        }}>
            { props.children }
        </DataContext.Provider>
    )
}
