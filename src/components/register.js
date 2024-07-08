register

export default function Register() {
    return (
      <form className="flex flex-col w-full max-w-md p-4 mx-auto my-8 bg-orange rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">Register Here!</h1>
        <div className="form-group mb-4">
          <label htmlFor="name" className="text-sm block mb-1">Name</label>
          <input
            type="text"
            id="name"
            value=""
            className="w-full p-2 pl-10 text-sm text-gray-700 border-1 border-gray-300 rounded-md"
            onChange=""
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="text-sm block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value=""
            className="w-full p-2 pl-10 text-sm text-gray-700 border-1 border-gray-300 rounded-md"
            onChange=""
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="text-sm block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value=""
            className="w-full p-2 pl-10 text-sm text-gray-700 border-1 border-gray-300 rounded-md"
            onChange=""
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    );
  }