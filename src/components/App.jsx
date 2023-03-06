import { Profile } from 'components/profile/profile';
import user from 'components/data/user';

import { Statistics } from 'components/statistics/statistics';
import data from 'components/data/data';

import { FriendList } from 'components/friendlist/friendlist';
import friends from 'components/data/friends';

import { TransactionHistory } from 'components/transactionHistory/transactionHistory';
import transactions from 'components/data/transactions';



export const App = () => {
  return (
  
      <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </>

  );
};
