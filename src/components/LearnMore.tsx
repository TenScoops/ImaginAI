import {BsPeopleFill, BsFileEarmarkCode, BsFillChatDotsFill} from "react-icons/bs"
import {MdDevices} from "react-icons/md"
import {TbTargetArrow} from "react-icons/tb"
import {IoEnterOutline} from "react-icons/io5"

const LearnMore = () => {
    return(
        
    <div id="learn-more" className=" h-screen flex flex-col justify-center items-center  space-y-8">
        
        <div className="flex flex-col items-center space-y-20 ">
            <h1 className="text-4xl font-bold">Stylish AI-Generated Art</h1>
            <div className="flex flex-row space-x-16 justify-center">
                <div className="flex flex-col items-center w-1/5">
                    <BsPeopleFill size = {30}/>
                    <p>Lorem ipsum dolor sit, amet blanditiis eos!
                    Commodi fuga consequatur quptate assumenda? 
                    Deserunt, reiciendis?
                    </p>
                </div>
                <div className="flex flex-col items-center w-1/5">
                    <BsFileEarmarkCode size = {30}/>
                    <p>Lorem ipsum dolor sit, amet blanditiis eos!
                    Commodi fuga consequatur quptate assumenda? 
                    Deserunt, reiciendis?
                    </p>
                </div>
                <div className="flex flex-col items-center w-1/5">
                    <MdDevices size = {30}/>
                    <p>Lorem ipsum dolor sit, amet blanditiis eos!
                    Commodi fuga consequatur quptate assumenda? 
                    Deserunt, reiciendis?
                    </p>
                </div>
            </div>
            <div className="flex flex-row space-x-16 justify-center">
                <div className="flex flex-col items-center w-1/5">
                    <BsFillChatDotsFill size = {30}/>
                    <p>Lorem ipsum dolor sit, amet blanditiis eos!
                    Commodi fuga consequatur quptate assumenda? 
                    Deserunt, reiciendis?
                    </p>
                </div>
                <div className="flex flex-col items-center w-1/5">
                    <TbTargetArrow size = {30}/>
                    <p>Lorem ipsum dolor sit, amet blanditiis eos!
                    Commodi fuga consequatur quptate assumenda? 
                    Deserunt, reiciendis?
                    </p>
                </div>
            </div>
            <button className="w-1/3 py-2.5 xsm:w-[150px] md:py-3 bg-slate-900 text-white font-normal rounded">
                Start Creating  
            </button>
        </div>
    
    {/* <div className="flex flex-col space-y-4">
        <img className="rounded-xl" src={Blonde} height={450} width={450} alt="Blonde woman" />
    </div>  */}

    </div>
        
    )
}

export default LearnMore
