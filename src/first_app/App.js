
import Second from "./Second";
import './App.css'
import First from "./First";
import Third from "./Third";
import Header from "../conponents/Header";
import Section from "../conponents/Section";
import Footer from "../conponents/Footer";

//attribute

function App(){
    const logo = "KOREAIT";
    const menus = ['1','2','3'];
    const consolePrint = ()=>{
        console.log('print')
    }

    return (
        <div>
            <Header logo={"jemicom"} 
                    menu={menus} 
                    consolePrint={consolePrint}
            />
            
            <Section />
            <Footer>11111111111111111</Footer>
        <div>Hello React</div>
        <a href="http://www.naver.com">naver go</a>
        <First />
        <Second />
        <Third />
        </div>
    )
}

export default App;