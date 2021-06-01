// import {useState} from 'react'

// function lalala() {
//     console.log("lalalla");
//   }

const SearchModule = ({ onSearch }) => {
    //This is a test 
    //When onChange happens, only this component will be re-rendered, the App.js will not be re-rendered!!!
    // const [shit, setShit] = useState(lalala()); 

    return <input type='text' placeholder='Search' onChange={
        (e) => {
            onSearch(e.target.value);
        }
    }></input>
}

export default SearchModule
