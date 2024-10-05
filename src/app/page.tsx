import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" text-white  rounded p-6 h-screen">
          <h1 className="text-4xl font-serif mt-12 ">WORDWELL</h1>
          <h3 className="mt-40 text-8xl font-serif">Stand Out With <span className='text-green-500'>Authenticity</span></h3>
          <button className="mt-40 bg-green-600 p-4 rounded-xl font-medium font-serif hover:bg-green-500">Get started Today</button>
        </div>
        <div className="text-white text-center rounded h-screen">
          <Spline
          scene="https://prod.spline.design/xmTF3Z8zH6vMp-jh/scene.splinecode" 
          />
        </div>
      </div>
    </div>
  );
}
