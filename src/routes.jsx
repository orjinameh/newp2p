import React from "react";
import Home from "./home"
import Verify from "./verify"
import Wallet from "./wallet"
import Payment from "./payment";
import Select from "./select";
import Btc from "./select/screens/btc";
import ETH from "./select/screens/eth";
import USDT from "./select/screens/usdt";
import BNB from "./select/screens/bnb";
import ADA from "./select/screens/ada";
import XRP from "./select/screens/xrp";
import SOL from "./select/screens/sol";
import DOGE from "./select/screens/doge";
import DOT from "./select/screens/dot";

const AppRoutes = () => {
    return (
        [
            {
                path: '/',
                element: <Home />,
                id: 1
            },
            {
                path: '/home',
                element: <Verify />,
                id: 2
            },
            {
                path: '/connect',
                element: <Wallet />,
                id: 3
            },
            {
                path: '/payment',
                element: <Payment/>,
                id: 4
            },
            {
                path: '/select-payment',
                element: <Select/>,
                id: 5
            },
            {
                path: '/swappage/btc',
                element: <Btc/>,
                id: 6
            },
            {
                path: '/swappage/eth',
                element: <ETH/>,
                id: 7
            },
            {
                path: '/swappage/usdt',
                element: <USDT/>,
                id: 8
            },
            {
                path: '/swappage/bnb',
                element: <BNB/>,
                id: 9
            },
            {
                path: '/swappage/ada',
                element: <ADA/>,
                id: 10
            },
            {
                path: '/swappage/xrp',
                element: <XRP/>,
                id: 11
            },
            {
                path: '/swappage/sol',
                element: <SOL/>,
                id: 12
            },
            {
                path: '/swappage/doge',
                element: <DOGE/>,
                id: 13
            },
            {
                path: '/swappage/doge',
                element: <DOT/>,
                id: 14
            }
        ]
    );
}

export default AppRoutes;