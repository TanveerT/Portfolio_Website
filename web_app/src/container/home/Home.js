import Page from '../../components/page/Page'
import Introduction from '../../components/Introduction/Introduction';
import Pagescroll from '../../container/Pagescroll/Pagescroll';
import Education from '../../components/Education/Education';
import Experience from '../../components/Experience/Experience';

const home =()=>{
   
    return (
        <div style={{ scrollSnapType : 'y mandatory',overflowY :'scroll',height:'100vh'}}>
            <Pagescroll/>
            <Page color='rgba(234, 219, 219, 0.3)' height='100vh' >
                <Introduction/>
            </Page>
            <Page color='rgba(230, 247, 255,0.8)' height='100vh'>
                
              <Education/>
            </Page>

            
            <Page color='rgba(246, 242, 6 ,0.3)'  height='100vh'>
                <Experience/>
            </Page>
            <Page color='lightgreen' height='100vh'/>
            
            
        </div>
    );

}

export default home;