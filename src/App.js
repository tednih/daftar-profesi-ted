import { ReactComponent as BgHeader } from "../src/images/bg-header-desktop.svg";
import { ReactComponent as Account } from "../src/images/account.svg";

function App() {
  return (
    <div className="max-w-[1440px] items-center mx-auto">
      <header className=" bg-primary ">
        <BgHeader className="w-full" />
      </header>

      <container className=" bg-LighGrayishBg flex h-96">
        <div className="items-center lg:max-w-[1140px] sm:max-w-[375px] m-auto w-full md:flex mt-[-45px] flex flex-col">
          <div className="p-4 bg-white w-full rounded-md shadow-md flex flex-row justify-between items-center ">
            <ul className="flex flex-row space-x-3 pl-8 ">
              <li className="bg-LighGrayishTablet p-2 rounded-md ">
                <a className="text-VeryDarkGrayish">
                  Front End
                  <button className="ml-2 bg-primary w-9 h-9 rounded-md hover:bg-VeryDarkGrayish text-white">
                    X
                  </button>
                </a>
              </li>
              <li className="bg-LighGrayishTablet p-2 rounded-md">
                <a className="text-VeryDarkGrayish">
                  CSS
                  <button className="ml-2 bg-primary w-9 h-9 rounded-md hover:bg-VeryDarkGrayish text-white">
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
            <div className="justify-between flex lg:flex-row sm:flex-col px-8  items-center">
              <div>
                <ul className="flex flex-row ">
                  <li className="">
                    <Account className="sm:flex " />
                  </li>
                  <li className="pl-6 sm:text-sm">
                    <div className="flex flex-row space-x-4 pb-2 text-primary">
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
                      className="text-VeryDarkGrayish hover:text-primary text-2xl sm:text-lg"
                    >
                      Senior Frontend Developer
                    </a>
                    <div className="flex flex-row space-x-4 sm:text-sm text-DarkGrayish">
                      <h2> 1 d ago </h2>
                      <h2> Full Time </h2>
                      <h2> Usa Only </h2>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className=" sm:flex-col">
                  <ul className="flex flex-row space-x-4 ">
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
