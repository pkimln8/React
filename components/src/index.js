import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  const author = 'Sam';

  return (

    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={author}
          timeAgo="Today at 4:45PM"
          content={faker.lorem.words()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
