import React from 'react'; 
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure about this ?
                </div>
                
                
            
            </ApprovalCard> 

            <ApprovalCard>
    
                <CommentDetail 
                 author="Komal" 
                 commented="Chai peene Chalien" 
                 avatar={faker.image.avatar()}
                />
    
            </ApprovalCard>

            <ApprovalCard>
               <CommentDetail 
                 author="Anmol" 
                 commented="GGKC"
                 avatar={faker.image.avatar()}
               />
            </ApprovalCard>

            <ApprovalCard>
               <CommentDetail 
                author="Divyansh" 
                commented="May the force be with you"
                avatar={faker.image.avatar()}
               />
            </ApprovalCard>
        </div>


    );

};

ReactDOM.render( <App />, document.querySelector('#root'));