/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import { StyledButton } from "@/components/Buttons/Button.styles"
import SVGSCFreiburgEmblem from "../components/icons/svg/SVGScFreiburg.js"
import DataSCFreiburg from 'components/DataSCFreiburg.js'
import LogoAlt from '../components/icons/svg/logoAlt';


const team = () => {
  return (
  <>
      
      
        <section className="mx-auto w-12/12 py-12 px-1 text-center md:py-4 md:px-4">
        <section  style={{"background-image": "url('/illuMaritim-2.png')"}} className="-mt-10 container w-12/12 h-[200vh] bg-[length:100vw_155vh] bg-no-repeat w-12/12 p-3 mx-auto sn-w-10/12 ">
          <div >
            
            <p className="headingA text-center text-8xl text-yellow-500">Das Team</p>          </div>

          <div className="">
            <div className='mx-auto w-9/12'>
            <Image src="/LogoAlt.png" alt="logoalt" height="240" width="1090" layout="responsive"/>
            </div>
            <div className='w-20' >  
            <Image src="/matroseimseil.png" alt="logoalt" height="445" width="159" layout="responsive"/>
            </div>
            
          </div>
      <div className="mt-4 flex flex-wrap -mx-24 lg:-mt-36">
              <div className="p-24 md:w-1/3 xl:p-36">
                <Image className="w-1/3 mx-auto mb-4 rounded-full" src="/matrose.png" layout="responsive" width="100" height="120" alt="Portrait"/>
                <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Simon</h3>
                <span className="text-2xl tLogo altext-blue-800 font-bold ">Obermaat</span>
                <p className="mt-4  text-1xl text-gray-300 leading-relaxed xl:text-2xl">Simon ist Teammitglied der ersten Stunde. Im richtigen Leben studiert Simon an der Uni Erziehungswissenschaften und hat gerade seinee Master absolviert. Simon ist ausgewiesener SC Freiburg Fan und wann immer möglich begleited er das Team zu den Auswärtsspielen</p>
              </div> 
             <lr classname="w-9/12 text-red-400"/> 
              <div className="p-24 md:w-1/3 xl:p-36 ">
              <Image className="w-1/3 mx-auto mb-4 rounded-full" src="/portrait-mick1.png" layout="responsive" width="100" height="120" alt="Portrait"/>
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Mick</h3>
                <span className="text-2xl text-blue-800 font-bold ">Captain</span>
                <p className="mt-4 text-1xl text-gray-300 leading-relaxed xl:text-2xl">Volker Schneider und Michael Schreck haben 2017 die Idee und das Konzept des Rettungsankers initiert und liessen den Kahn in September 2017 vom Stapel laufen. Seit Januar 2020 zeigt sich Michael nun in alleiniger Verantwortung für den Rettungsanker und steurt das Schiff in diesen unruhigen Zeiten verantwortungsvoll durch die hohen Wogen </p>
              </div>
              <div className=" p-24 md:w-1/3 xl:p-36">
              <Image className="-nt-w-1/3 mx-auto mb-4 rounded-full" src="/offizierin.png" layout="responsive" width="100" height="120" alt="Portrait"/>
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Anne</h3>
                <span className="text-2xl text-blue-800 font-bold ">I. Offizierin</span>
                <p className="mt-4 text-1xl xl:text-1xl text-gray-300 leading-relaxed xl:text-2xl ">Auch Anne ist Teammitglied derersten Stunde nach Stapelablauf des Rettungsanker-Mit Ihrer langjährigen Gastroerfahrung  ist sie ein wichtiger Pfeiler im Team des Rettungsankers</p>
              </div>
            </div>
</section>
   </section>                      

)
</>

  )}



export default team
