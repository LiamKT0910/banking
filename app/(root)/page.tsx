import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {

    const loggedIn = { firstName: 'Liam', lastName: 'Tran', email: 'liam.tran713@gmail.com' };

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and manage your account.'
                    />

                    <TotalBalanceBox
                        account={[]}
                        totalBanks={1}
                        totalCurrentBalance={5555.55}
                    />
                </header>
                RECENT TRANSACTION
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 5555.55 }, { currentBalance: 99999.99 }]}
            />
        </section>
    );
};

export default Home;