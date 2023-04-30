import React, { useContext, useEffect, useState } from "react";
import LogoComp from "../LogoComp";
import { HeaderMenuTitles } from "../../../data";
import HeaderMenuItem from "./HeaderMenuItem";
import { 
  WalletConnectButton, 
  SeiWalletContext, 
  useWallet
} from "@sei-js/react";

const Header = () => {
  const { 
    supportedWallets, 
    connect, 
    disconnect, 
    installedWallets 
  } = useContext(SeiWalletContext);
  const { connectedWallet, offlineSigner, accounts } = useWallet();

  const [active, setActive] = useState(0);
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#141414] z-[100]">
        <div
            className="sm:flex xs:hidden
              custom-2xl:px-[56px] xl:px-[25px] lg:px-[56px] md:px-[25px] sm:px-[20px] xs:px-[24px]
              custom-2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col
              justify-between
              border-b-[1px] border-semiSplitter
              custom-2xl:h-[80px] xl:h-[80px] lg:h-[80px] md:h-[80px] sm:h-[80px] xs:h-[80px]
              w-full
            "
        >
            <div className="flex">
                <LogoComp />
                <div
                    className="flex flex-row h-full
                      lg:justify-between md:justify-around sm:justify-between xs:justify-between
                    "
                >
                    {HeaderMenuTitles.map((menu: any, index) => (
                        <HeaderMenuItem
                            key={index}
                            title={menu.name}
                            link={menu.link}
                            active={active === menu.link}
                        />
                    ))}
                </div>
            </div>
            <div
                className="flex
                            custom-2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col
                            h-full self-center justify-between 
                            custom-2xl:w-fit xl:w-fit lg:w-full md:w-full sm:w-full"
            >
                <div
                    className="flex flex-row items-center
                                md:justify-end sm:justify-end
                                "
                >
                  <div className="wallet-adapter-button-trigger">
                  
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;