import Image from 'next/image'
import image1 from '../../assets/kitten.jpg'
export default function Home() {
  return (
    <main>
      <h1 className="text-center bg-green-600 py-4 rounded-full">
        <span style={{ color: "#f00" }} className="text-4xl font-bold ">
          Hello Bangladesh
        </span>
      </h1>
        <Image width={600} height={400} src={image1} alt=''/>
    </main>
  );
}

      

      

