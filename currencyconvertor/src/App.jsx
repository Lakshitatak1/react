import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setAmount]=useState();
  const [from, setFrom]=useState("usd");
  const [to, setTo]=useState("inr");
  const [convertedamount,setconvertedamount]=useState(0);
  const BackgroundImage = 'https://imgs.search.brave.com/5dGE_sjmfRZRXllaUE1w1lNgglDlMyePdpCBGZ7i2XY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/OTEzMjA1MC9waG90/by9jb2xsYWdlLWlt/YWdlLW9mLWhhbmQt/ZHJvcHBpbmctY29p/bnMtaW50by1hbm90/aGVyLWhhbmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW1i/MXNaSUpZTFdYMWk3/NnphMENkUVQ3QzVM/ZzBldzdHUVAwd0Va/dU1rcDA9'
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  
  const swap = () =>{
    setFrom(to);
    setTo(from);
    setconvertedamount(amount);
    setAmount(convertedamount);
  }
  
  const convert = ()=>{
    setconvertedamount(amount*currencyInfo[to]);
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount)=> setAmount(amount)}   
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> setAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedamount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert  {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
