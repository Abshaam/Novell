
import { useEffect } from "react";
import NovelForm from "./NovelForm";
import ListNovel from "./ListNovel";
import { connect } from "react-redux";
import { getNovels } from "../store/thunk";
import NavScrollExample from "./Navbar";
import styleup from '../css/todo.module.css';
import formStyle from '../css/todo.module.css';
import Spinner from 'react-bootstrap/Spinner'
import { getNovelsData,  getNovelsLoading } from "../store/selector";




const NovelList = ({ novels, loadAll, loadingStarts }) => {

    // loadAll gets called when the page sets in
    useEffect(() => {
        loadAll()
    }, [loadAll])

    const spinner = <Spinner animation = 'border' style= {{marginLeft: '50em'}}></Spinner>
    
    return (
        <>
        <div className = {styleup.back}>
        <NavScrollExample/>
        <div className="list-wrapper">
            
            {/* input form to add a novel */}
            <NovelForm />

            <div className= {formStyle.wrap}>
           

            { loadingStarts ? (
                spinner
            ) : (

                <> {

                     novels.map((novel, key) => (
                   
                   <ListNovel task= {novel} key={key} />
           
               ))
              }
                 

               </>
                
                
            )}
            </div>

        </div>
        </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    novels: getNovelsData(state),
    loadingStarts: getNovelsLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
    loadAll: () => dispatch(getNovels())
})

export default connect(mapStateToProps, mapDispatchToProps) (NovelList);

