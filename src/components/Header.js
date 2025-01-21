import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

export const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 p-4 shadow-lg bg-white z-50">

      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 items-center">

        <div className="flex items-center space-x-4 col-span-3 lg:col-span-3">

          <img
            onClick={toggleMenuHandler}
            className="h-8 cursor-pointer lg:hidden"
            alt="menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          />
 
          <a href="/">
            <img
              className="h-8"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />
          </a>
        </div>

        <div className="col-span-3 lg:col-span-6 flex justify-center lg:block hidden">
          <div className="flex w-full sm:w-4/5 lg:w-2/3">
            <input
              className="px-5 py-2 rounded-l-full border border-gray-400 w-full"
              type="text"
              placeholder="Search"
            />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
              🔍
            </button>
          </div>
        </div>


        <div className="flex items-center justify-end space-x-4 col-span-3 lg:col-span-3">
          <img
            className="h-8 cursor-pointer"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>


      <div className="mt-4 sm:mt-0 lg:hidden flex justify-center">
        <div className="flex w-full sm:w-4/5 lg:w-2/3">
          <input
            className="px-5 py-2 rounded-l-full border border-gray-400 w-full"
            type="text"
            placeholder="Search"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};

