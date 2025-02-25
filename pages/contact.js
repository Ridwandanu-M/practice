export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-lg text-gray-700 mb-6">
          Jika ada pertanyaan, silakan hubungi kami melalui formulir di bawah ini.
        </p>
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <label className="block mb-2">
            <span className="text-gray-700">Nama:</span>
            <input
              type="text"
              className="mt-1 block w-full p-2 border rounded-md"
              placeholder="Masukkan nama Anda"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              className="mt-1 block w-full p-2 border rounded-md"
              placeholder="Masukkan email Anda"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Pesan:</span>
            <textarea
              className="mt-1 block w-full p-2 border rounded-md"
              placeholder="Tulis pesan Anda"
              rows="4"
            ></textarea>
          </label>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Kirim
          </button>
        </form>
      </div>
    );
  }
  