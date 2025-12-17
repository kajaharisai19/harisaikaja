export default function Publications() {
  return (
    <div className="mx-auto max-w-5xl px-6 text-left">
      <h2 className="text-3xl font-bold">Publications</h2>
      <p className="mt-2 text-gray-600">
        Conference papers and research presentations.
      </p>

      <div className="mt-6 space-y-6">
        <div className="rounded-xl border p-5">
          <h3 className="text-lg font-semibold">
            PUFchain: Secure IoHT Authentication via PUFs, ZKPs, and Blockchain
          </h3>

          <p className="mt-2 text-gray-600">
            Presented at the 3rd International Conference on Artificial
            Intelligence, Blockchain, and Internet of Things (AIB Things), held
            at Central Michigan University, USA (Sept 06–07, 2025).
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Authors: Samah Mansour, Vincent Duronio, Mohamed Firas Aguir,
            Mostafa El-Said, Andrew Kalafut, Hari Sai Kaja
          </p>

          {/* <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            View paper
          </a> */}
        </div>
      </div>
    </div>
  );
}
