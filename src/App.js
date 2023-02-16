import { ReactComponent as BgHeader } from "../src/images/bg-header-desktop.svg";
import account from "../src/images/account.svg";

function App() {
  return (
    <div className="lg:max-w-[1440px] items-center mx-auto">
      <header className=" bg-primary ">
        <BgHeader className="w-auto" />
      </header>

      <container className=" bg-LighGrayishBg flex h-96">
        <div className="items-center lg:max-w-[1140px] max-w-[375px] m-auto w-full md:flex mt-[-45px] flex flex-col">
          <div className="p-4 bg-white w-full rounded-md shadow-md flex flex-row justify-between items-center ">
            <ul className="flex flex-wrap gap-2">
              <li className="bg-LighGrayishTablet pl-2 rounded-md space-x-3">
                <a className="text-VeryDarkGrayish flex justify-between items-center">
                  Front End
                  <button className="ml-2 bg-primary w-9 h-9 rounded-r-md hover:bg-VeryDarkGrayish text-white">
                    X
                  </button>
                </a>
              </li>
              <li className="bg-LighGrayishTablet pl-2 rounded-md space-x-3">
                <a className="text-VeryDarkGrayish flex justify-between items-center">
                  CSS
                  <button className="ml-2 bg-primary w-9 h-9 rounded-r-md hover:bg-VeryDarkGrayish text-white">
                    X
                  </button>
                </a>
              </li>
              <li className="bg-LighGrayishTablet pl-2 rounded-md space-x-3">
                <a className="text-VeryDarkGrayish flex justify-between items-center">
                  CSS
                  <button className="ml-2 bg-primary w-9 rounded-r-md h-9 hover:bg-VeryDarkGrayish text-white">
                    X
                  </button>
                </a>
              </li>
            </ul>
            <a href="/" className="pr-8 hover:text-primary hover:underline">
              Clear
            </a>
          </div>

          <div className="p-4 bg-white w-full rounded-md shadow-md mt-7 hover:border-l-4 border-l-primary">
            <div className="justify-between flex flex-col lg:flex-row lg:items-center w-full max-w-[375px] lg:max-w-full ">
              <div>
                <ul className="flex flex-col gap-3 lg:flex-row">
                  <li className="mt-[-38px] lg:mt-0 ">
                    <img
                      src={account}
                      alt=""
                      className="object-cover h-12 w-12 lg:w-20 lg:h-20 "
                    />
                  </li>

                  <li className="items-center pb-5 lg:pb-0">
                    <div className="flex flex-row gap-2 mb-3 lg:mb-1 text-primary">
                      <h2> Photoshop </h2>
                      <h2 className="text-white bg-primary px-3 rounded-full">
                        New
                      </h2>
                      <h2 className="text-white bg-VeryDarkGrayish px-3 rounded-full">
                        Featured
                      </h2>
                    </div>
                    <a
                      href="/"
                      className="text-VeryDarkGrayish hover:text-primary text-2xl "
                    >
                      Senior Frontend Developer
                    </a>
                    <div className="flex flex-row mt-3 lg:mt-0 space-x-4 sm:text-sm text-DarkGrayish">
                      <h2> 1 d ago </h2>
                      <h2> Full Time </h2>
                      <h2> Usa Only </h2>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-DarkGrayish w-full h-1 mb-5 lg:hidden"></div>
              <div>
                <div className="">
                  <ul className="flex flex-wrap gap-4 lg:flex-row ">
                    <li>
                      <a
                        href="/"
                        className="bg-LighGrayishTablet text-primary hover:bg-primary hover:text-LighGrayishTablet py-2 px-2 rounded-md"
                      >
                        Java Script
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="bg-LighGrayishTablet text-primary hover:bg-primary hover:text-LighGrayishTablet py-2 px-2 rounded-md"
                      >
                        Java Script
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="bg-LighGrayishTablet text-primary hover:bg-primary hover:text-LighGrayishTablet py-2 px-2 rounded-md"
                      >
                        Java Script
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="bg-LighGrayishTablet text-primary hover:bg-primary hover:text-LighGrayishTablet py-2 px-2 rounded-md"
                      >
                        Java Script
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
