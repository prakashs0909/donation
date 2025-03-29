import "./App.css";
import React,{useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      toast.success("Ram paid ₹5000 ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 15000); 

    return () => clearInterval(interval); 
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <ToastContainer style={{ width: "300px" }}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="text-gray-600 body-font bg-red-50 shadow-lg flex-grow">
        <h1 className="title-font sm:text-4xl text-3xl mx-auto px-5 pt-7 pb-2 font-medium text-gray-900">
          Urgent Help Needed for My Mother's Surgery
        </h1>
        <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <img
              className="object-cover object-center rounded-3xl shadow-lg"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="mb-5 leading-relaxed">
              I am ____ , student of Delhi University
            </p>
            <p className="mb-5 leading-relaxed">
              I'm reaching out with a desperate plea for help. My mother is
              currently hospitalized and in a critical condition because of the
              terrible accident of my parents when they were going to our
              village. She requires immediate head surgery, which is scheduled
              for this Thursday.
            </p>
            <p className="mb-5 leading-relaxed">
              The total cost of the surgery is ₹10 lakhs, and we urgently need
              your support to cover this expense. Every contribution, big or
              small, will bring us closer to saving her life.
            </p>
            <p className="mb-5 leading-relaxed">
              Time is of the essence, and we have only a short window to raise
              the funds. I would be forever grateful if you could contribute as
              much as possible to help us reach our goal.
            </p>
            <p className="mb-5 leading-relaxed">
              Please help us in this difficult time. Your support and generosity
              will be a blessing to our family.
            </p>
            <p className="mb-8 leading-relaxed">
              Thank you for your kindness and prompt response🙏🏼
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">
            Urgent Help Needed
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full  px-8 rounded">
                <div className=" p-6 bg-gray-50 border rounded-lg">
                  <h3 className="text-2xl md:text-3xl font-semibold border rounded-3xl bg-red-100 py-1 mb-3 text-gray-800">
                    Donate via UPI
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Scan the QR code or use the UPI ID below:
                  </p>
                  <div className="flex justify-center mt-4">
                    <img
                      src="https://th.bing.com/th/id/OIP.iVT8onjjn8mo3L9LM_SUgQHaHa?rs=1&pid=ImgDetMain"
                      alt="UPI QR Code"
                      className="w-40 h-40 border rounded-lg shadow-md"
                    />
                  </div>
                  <h5 className="mt-4 text-lg font-medium text-gray-900">
                    UPI ID: <span className="font-bold">9717573000@ptyes</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full  px-8 rounded">
                <div className=" p-6 bg-gray-50 border rounded-lg">
                  <h3 className="text-2xl md:text-3xl font-semibold border rounded-3xl bg-red-100 py-1 mb-3 text-gray-800">
                    Bank Transfer Details
                  </h3>
                  <p className="mt-3  text-xl text-gray-700">
                    <strong>A/c Holder:</strong> Poonam Tyagi
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>A/c No:</strong> 33350724032
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>IFSC:</strong> SBIN0015467
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>Bank:</strong> State Bank of India
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>Branch:</strong> Crossing Republic, Ghaziabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
