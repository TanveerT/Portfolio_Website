import Page from '../../components/page/Page'
import Introduction from '../../components/Introduction/Introduction';
import Pagescroll from '../../container/Pagescroll/Pagescroll';

const home =()=>{
   
    return (
        <div>
            <Pagescroll/>
            <Page color='rgba(234, 219, 219, 0.3)' height='100vh' >
                <Introduction/>
            </Page>
            <Page color='lightgray' height=''/>
            <Page color='lightblue'  />
            {/* <Page color='lightgreen'/> */}
            
            
        </div>
    );

}

export default home;