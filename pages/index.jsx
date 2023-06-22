import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useForm } from 'react-hook-form'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
 <div className='bg-green-500 h-screen w-screen grid place-items-center '>
    <h1 className='text-5xl font-extrabold text-white'>Hello World</h1>

      <form onSubmit={handleSubmit(onSubmit)}> 
        <label>
          Name:
          <input type="text" {...register("name")} />
        </label>
        <label>
          Email:
          <input type="email" {...register("email")} />
        </label>

          <button type="submit">Submit</button>

      </form>


    
 </div>
  )
}
